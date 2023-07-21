FROM node:18.16.0-alpine
WORKDIR /code

COPY package.json package-lock.json /code/
RUN npm cache clean --force && \
    npm config set fetch-retry-mintimeout 1000000 && \
    npm config set fetch-retry-maxtimeout 6000000 && \
    npm config set fetch-retries 5 && \
    npm config set fetch-timeout 3000000 && \
    npm install -g npm@latest && \
    npm install
#RUN set -eux; apk add --no-cache curl;
#RUN npm cache clean --force && npm config set fetch-retry-mintimeout 1000000 && npm config set fetch-retry-maxtimeout 6000000 && npm config set fetch-retries 5 && npm config set fetch-timeout 3000000 && npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
