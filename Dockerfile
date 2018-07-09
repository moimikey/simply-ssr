FROM node:10
WORKDIR /usr/src
COPY package*.json ./
COPY ./dist/client ./client
COPY ./dist/server ./server
COPY ./dist/config ./server/config
COPY ./dist/server/views ./server/views
RUN node --version
RUN npm install --only=prod
RUN ls -al client/ server/
CMD [ "npm", "run", "start:server" ]
EXPOSE 8000
