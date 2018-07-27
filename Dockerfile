FROM node:10
WORKDIR /usr/src
COPY package*.json ./
COPY ./dist/client ./client
COPY ./dist/server ./server
RUN node --version
RUN npm install --only=prod
RUN ls -al client/ server/
CMD [ "npm", "run", "start:server" ]
EXPOSE 8000
