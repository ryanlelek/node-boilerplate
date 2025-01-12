FROM node:22.13.0-alpine3.21

WORKDIR /usr/src/app

COPY package.json ./
COPY public ./public/
COPY server.js ./
COPY app/ ./app/

RUN npm install

USER node
EXPOSE 3000
CMD ["node", "server.js"]
