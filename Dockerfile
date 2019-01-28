FROM node:11.8.0

WORKDIR /usr/src/app

RUN npm install lerna -g

COPY package*.json ./
RUN npm install --only=production

COPY packages/stormveil ./packages/stormveil
COPY packages/stormveil-ui ./packages/stormveil-ui

COPY lerna.json ./
RUN lerna bootstrap -- --production --no-optional

COPY . .

CMD [ "npm", "--prefix", "packages/stormveil-ui", "bundle" ]
