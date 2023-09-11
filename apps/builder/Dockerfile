# ---- Base Node ----
FROM node:18 AS base

WORKDIR /app

COPY ./package.json ./package.json
COPY ./run.ts ./run.ts

RUN curl -sSL https://nixpacks.com/install.sh | bash
RUN npm i -G tsx
