FROM node:12.0-slim

COPY . .

RUN npm install

EXPOSE 3000

CMD node index.js