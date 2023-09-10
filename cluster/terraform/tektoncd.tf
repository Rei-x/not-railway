resource "kubectl_manifest" "tekton" {
    yaml_body = file("${path.module}/tekton.yaml")
}