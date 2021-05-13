FROM node:14-alpine AS build-stage

# used as build environment 
# as well as development environment

RUN apk update && \
  apk add --no-cache --virtual .gyp \
  tini 

ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /code
ADD ./package*.json ./

RUN npm ci
ADD . .
RUN npm run build 
EXPOSE 8081


FROM node:14-alpine AS production-build
# build production dist

WORKDIR /code

COPY --chown=node:node ./package*.json ./
RUN npm i next && npm cache clean --force



FROM node:12-alpine AS production-stage
# production container

# Copy files from above environments

# Add Tini
RUN apk update && \
  apk add --no-cache --virtual .gyp \
  tini 

ENTRYPOINT ["/sbin/tini", "--"]

USER node
WORKDIR /code

COPY --chown=node:node ./package*.json ./
COPY --chown=node:node --from=production-build /code/node_modules ./node_modules
COPY --chown=node:node --from=build-stage /code/.next ./.next
COPY --chown=node:node --from=build-stage /code/public ./public


EXPOSE 8081
# Start with 
# npm run serve
CMD [ "/code/node_modules/.bin/next", "start" ]