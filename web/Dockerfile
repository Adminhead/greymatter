FROM node:22-alpine AS build

WORKDIR /app

COPY ./web/package.json ./
COPY ./web/package-lock.json ./

RUN npm install

COPY ./web/ ./

RUN npm run build

FROM node:22-alpine AS app

WORKDIR /app

COPY --from=build /app ./

RUN npm install --omit=dev

ENV HOST=0.0.0.0
ENV PORT=3000

ENTRYPOINT [ "npm", "run", "start" ]