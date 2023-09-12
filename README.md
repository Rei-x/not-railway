![NotRailway](https://i.imgur.com/4MGZ0be.gif)

# What is this?

NotRailway is a hobby project to try to better understand challenges that come up when building such a PaaS like [Railway](https://railway.app/).

By no mean it is production ready. It is just a proof of concept.

## Features

- [x] Build app from Dockerfile or Nixpacks by passing git repo url
- [x] Provision custom domain with SSL
- [x] Deploy app
- [x] Specify environment variables for build and deployment
- [x] Organize apps in services and projects

## Security

It's not secure at all. Missing security features:

- [ ] Authentication/Authorization
- [ ] Restricting pod network access
- [ ] Restricting pod resource usage
- [ ] Running deployments and builds with secure container runtime (like gvisor or kata containers)
- [ ] Possible RCE because of using `execSync` to schedule build
- [ ] Rate limiting
- [ ] Subdomain validation
- [ ] Lack of complexity check in graphql queries (possible DOS)
- [ ] Deploying user pods in different namespaces
