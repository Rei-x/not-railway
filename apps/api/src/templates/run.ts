export const runTemplate = ({
  repoUrl,
  imageReference,
  useNixpacks = true,
}: {
  repoUrl: string;
  imageReference: string;
  useNixpacks?: boolean;
}) => `apiVersion: tekton.dev/v1beta1
kind: PipelineRun
metadata:
  generateName: clone-build-push-run-
spec:
  pipelineRef:
    name: ${useNixpacks ? "clone-nixpacks-build-push" : "clone-build-push"}
  podTemplate:
    securityContext:
      fsGroup: 65532
  workspaces:
    - name: shared-data
      volumeClaimTemplate:
        spec:
          accessModes:
            - ReadWriteOnce
          resources:
            requests:
              storage: 1Gi
    - name: docker-credentials
      secret:
        secretName: docker-credentials
  params:
    - name: repo-url
      value: ${repoUrl}
    - name: image-reference
      value: ${imageReference}`;
