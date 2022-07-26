FROM node:18-bullseye AS builder

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . ./
RUN npm run build

FROM node:18-bullseye AS runner

WORKDIR /usr/app

COPY --from=builder /usr/app/build ./

ENTRYPOINT ["node", "index.js"]