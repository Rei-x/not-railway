output "cluster_id" {
  value = digitalocean_kubernetes_cluster.bootstrapper.id
}

output "cluster_name" {
  value = digitalocean_kubernetes_cluster.bootstrapper.name
}

