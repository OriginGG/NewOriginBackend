FROM node:lts as a
COPY . /app
WORKDIR /app

FROM a as postgraphile
RUN npm install
CMD npm run start-postgraphile

FROM a as api
RUN npm install
CMD npm run start-api

FROM a as gateway
RUN npm install
CMD npm run start-gateway