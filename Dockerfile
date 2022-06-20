FROM node: 16.15-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]