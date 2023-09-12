![NotRailway](https://i.imgur.com/4MGZ0be.gif)

# What is this?

NotRailway is a hobby project to try to better understand challenges that come up when building such a PaaS like [Railway](https://railway.app/).

By no means, it is production-ready. It is just a proof of concept.

## Features

- [x] Build an app from a Dockerfile or Nixpacks by passing a git repo URL.
- [x] Provision a custom domain with SSL.
- [x] Deploy an app.
- [x] Specify environment variables for build and deployment.
- [x] Organize apps in services and projects.

## Security

It's not secure at all. Missing security features:

- [ ] Authentication/Authorization
- [ ] Restricting pod network access
- [ ] Restricting pod resource usage
- [ ] Running deployments and builds with a secure container runtime (like gvisor or kata containers)
- [ ] Possible RCE (Remote Code Execution) because of using `execSync` to schedule builds.
- [ ] Rate limiting
- [ ] Subdomain validation
- [ ] Lack of complexity check in GraphQL queries (possible DOS - Denial of Service)
- [ ] Deploying user pods in different namespaces
