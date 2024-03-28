FROM node:buster:latest

#RUN apt update -y && apt install -y procps


USER node

WORKDIR /home/node/app

CMD [ "/home/node/app/.docker/start.sh" ]