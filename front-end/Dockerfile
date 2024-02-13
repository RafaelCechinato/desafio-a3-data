FROM node:14

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm i

COPY ./front-end .

EXPOSE 3000

CMD ["npm","run","dev"]
