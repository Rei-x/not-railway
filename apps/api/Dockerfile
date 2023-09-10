# ---- Base Node ----
FROM node:18-alpine AS base
LABEL org.opencontainers.image.source https://github.com/rei-x/roomhunter
RUN apk add --no-cache libc6-compat openssl1.1-compat && apk update
WORKDIR /app

# ---- Turbo build ----
FROM base AS builder
RUN npm i -G turbo@1.10.1
COPY . .
RUN npx turbo prune --scope=api --docker

# ---- Dependencies ----
FROM base AS installer

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/tsconfig.json ./tsconfig.json

RUN mkdir -p /app/node_modules
RUN npm ci --no-audit

FROM base AS runner
LABEL name="api"

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/out/full .
COPY --from=builder --chown=nextjs:nodejs /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=installer --chown=nextjs:nodejs /app/node_modules ./node_modules/
COPY --from=builder --chown=nextjs:nodejs /app/tsconfig.json ./tsconfig.json
COPY --from=builder --chown=nextjs:nodejs /app/.env.vault ./
RUN npm run db:generate

CMD npm run db:migrate:prod && npm run db:studio
