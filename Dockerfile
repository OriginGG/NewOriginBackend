FROM node:lts as a
COPY . /app
WORKDIR /app

FROM a as postgraphile
RUN yarn 
CMD yarn start-postgraphile

FROM a as api
RUN yarn 
CMD yarn start-api

FROM a as gateway
RUN yarn
CMD yarn start-gateway