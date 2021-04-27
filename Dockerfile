FROM node:lts-alpine3.13

RUN apk add --no-cache tini

EXPOSE 8000

WORKDIR /app

COPY package.json package-lock*.json ./ 

RUN npm install && npm cache clean --force

COPY . .

ENTRYPOINT [ "/sbin/tini", "--" ]

CMD ["node", "index.js"]

