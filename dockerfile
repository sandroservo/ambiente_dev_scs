FROM node:buster

RUN apt-get update -y && apt-get install -y openssl


USER node

WORKDIR /home/node/app

CMD [ "/home/node/app/.docker/start.sh" ]