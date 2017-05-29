FROM node:6.10

COPY package.json /usr/src
WORKDIR /usr/src/
RUN npm install

RUN mkdir tests
COPY tests/ /usr/src/tests/

CMD ["node_modules/.bin/mocha", "tests/"]
