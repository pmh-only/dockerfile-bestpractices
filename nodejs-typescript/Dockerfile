FROM alpine as build

RUN apk add --no-cache nodejs
RUN apk add --no-cache npm

WORKDIR /app

COPY package.json \
     package-lock.json \
     ./

RUN npm i

COPY tsconfig.json .
COPY src src

RUN npx tsc

FROM alpine as resolve

RUN apk add --no-cache nodejs
RUN apk add --no-cache npm

WORKDIR /app

COPY package.json \
     package-lock.json \
     ./

RUN npm i --omit=dev

FROM alpine as runtime

RUN apk add --no-cache nodejs

ARG user=1000
ARG group=1000

USER $user:$group
WORKDIR /app

COPY --from=build /app/dist dist
COPY --from=resolve /app/node_modules node_modules

ENTRYPOINT ["/usr/bin/node", "dist/main.js"]
