FROM node:lts as a
COPY . /app

FROM a as postgraphile
RUN npm install
RUN npm run start-postgraphile

FROM a as api
RUN npm install
RUN npm run start-api

FROM a as gateway
RUN npm install
RUN npm run start-gateway