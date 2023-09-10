terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = ">= 2.25.2"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.16.1"
    }

    kubectl = {
      source  = "gavinbunney/kubectl"
      version = ">= 1.7.0"
    }
  }
}

locals {
  doks_config         = digitalocean_kubernetes_cluster.bootstrapper.kube_config[0].raw_config
  doks_endpoint       = digitalocean_kubernetes_cluster.bootstrapper.endpoint
  doks_token          = digitalocean_kubernetes_cluster.bootstrapper.kube_config[0].token
  doks_ca_certificate = digitalocean_kubernetes_cluster.bootstrapper.kube_config[0].cluster_ca_certificate
}

provider "digitalocean" {
  token = var.do_token
}

provider "kubernetes" {
  host  = local.doks_endpoint
  token = local.doks_token
  cluster_ca_certificate = base64decode(
    local.doks_ca_certificate
  )
}

provider "kubectl" {
  load_config_file = false
  host             = local.doks_endpoint
  token            = local.doks_token
  cluster_ca_certificate = base64decode(
    local.doks_ca_certificate
  )
}

