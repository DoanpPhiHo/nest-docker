FROM node:10-alpine

RUN mkdir -p /src/app
WORKDIR /src/app

COPY package*.json /src/app

RUN npm install --silent
RUN npm i -g @nestjs/cli

ADD ./ /src/app

EXPOSE 3100

CMD [ "npm", "run", "start:dev" ]