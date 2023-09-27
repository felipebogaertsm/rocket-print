# Dependencies:
FROM node:20-bullseye as dependencies

WORKDIR /app

COPY ./package*.json ./
RUN npm ci

# Build:
FROM node:20-bullseye as builder

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm build

# Entrypoint:
FROM node:20-bullseye as runner

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]