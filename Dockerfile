FROM node:10
WORKDIR /usr/src
COPY package*.json ./
COPY ./dist/client ./client
COPY ./dist/server ./server
RUN ls -al
RUN node --version
RUN npm install --only=prod
CMD [ "npm", "run", "start:server" ]
EXPOSE 1234
