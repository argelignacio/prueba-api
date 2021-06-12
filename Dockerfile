FROM node:14-alpine
RUN mkdir -p /csv
COPY package.json csv/package.json
WORKDIR /csv
RUN npm install --only=production --silent
RUN npm i nodemon -g
COPY . /csv
CMD npm start