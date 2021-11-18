FROM node:16-alpine3.11

COPY . /app
WORKDIR /app

RUN yarn install --frozen-lockfile
CMD yarn watch

EXPOSE 3000
