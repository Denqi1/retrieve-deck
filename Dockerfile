# Stage 1: build
FROM oven/bun:latest AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . .
RUN bun run build

CMD ["bun", "dev"]
