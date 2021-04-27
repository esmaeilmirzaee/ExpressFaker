FROM node:lts-alpine3.13

EXPOSE 8000

RUN apk add --no-cache tini

WORKDIR /usr/src/app/

COPY package.json package-lock*.json ./ 

RUN npm install && npm cache clean --force

COPY . .

ENTRYPOINT [ "/sbin/tini", "--" ]

CMD ["node", "./index.js"]

