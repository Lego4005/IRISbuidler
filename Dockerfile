FROM node:18.18.0-slim as base
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base as bolt-ai-development
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY . .
EXPOSE 5173
CMD ["pnpm", "run", "dev"]

FROM base as bolt-ai-production
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod
COPY . .
RUN pnpm run build
EXPOSE 5173
CMD ["pnpm", "run", "start"]
