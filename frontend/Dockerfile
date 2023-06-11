FROM node:18.16.0-alpine
WORKDIR /code

COPY package.json package-lock.json /code/
RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
