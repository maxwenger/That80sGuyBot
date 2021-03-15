from node:15.11-alpine3.10

ENV NODE_ENV production

WORKDIR /app

COPY ["src/package.json", "src/package-lock.json*", "./"]

RUN npm install --production

COPY src .

CMD ["node", "."]
