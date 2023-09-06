#!/bin/bash
#
# Setup for Control Plane (Master) servers

set -euxo pipefail

NODENAME=$(hostname -s)

sudo kubeadm config images pull

echo "Preflight Check Passed: Downloaded All Required Images"

sudo kubeadm init --apiserver-advertise-address=$CONTROL_IP --apiserver-cert-extra-sans=$CONTROL_IP --pod-network-cidr=$POD_CIDR --service-cidr=$SERVICE_CIDR --node-name "$NODENAME" --ignore-preflight-errors Swap

mkdir -p "$HOME"/.kube
sudo cp -i /etc/kubernetes/admin.conf "$HOME"/.kube/config
sudo chown "$(id -u)":"$(id -g)" "$HOME"/.kube/config

# Save Configs to shared /Vagrant location

# For Vagrant re-runs, check if there is existing configs in the location and delete it for saving new configuration.

config_path="/vagrant/configs"

if [ -d $config_path ]; then
  rm -f $config_path/*
else
  mkdir -p $config_path
fi

cp -i /etc/kubernetes/admin.conf $config_path/config
touch $config_path/join.sh
chmod +x $config_path/join.sh

kubeadm token create --print-join-command >$config_path/join.sh

# Install Calico Network Plugin

curl https://raw.githubusercontent.com/projectcalico/calico/v${CALICO_VERSION}/manifests/calico.yaml -O

kubectl apply -f calico.yaml

sudo -i -u vagrant bash <<EOF
whoami
mkdir -p /home/vagrant/.kube
sudo cp -i $config_path/config /home/vagrant/.kube/
sudo chown 1000:1000 /home/vagrant/.kube/config
EOF

# Install Metrics Server

kubectl apply -f https://raw.githubusercontent.com/techiescamp/kubeadm-scripts/main/manifests/metrics-server.yaml

# Install helm
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
helm repo add traefik https://traefik.github.io/charts

# Install metallb

kubectl get configmap kube-proxy -n kube-system -o yaml |
  sed -e "s/strictARP: false/strictARP: true/" |
  kubectl apply -f - -n kube-system

kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.13.11/config/manifests/metallb-native.yaml

# wait for metallb pods to be ready

kubectl rollout status deployment controller -n metallb-system --timeout=90s
# # create metallb config
# # echo this config to file
# echo "apiVersion: metallb.io/v1beta1
# kind: IPAddressPool
# metadata:
#   name: first-pool
#   namespace: metallb-system
# spec:
#   addresses:
#   - 10.0.0.20-10.0.0.30" >metallb-config.yaml

# kubectl apply -f metallb-config.yaml

echo "apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: example
  namespace: metallb-system" >metallb-l2.yaml

# kubectl apply -f metallb-l2.yaml

# helm install traefik traefik/traefik
