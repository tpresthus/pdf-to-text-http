FROM node:8-alpine

RUN apk add --no-cache poppler-utils

WORKDIR /usr/src/app

COPY src/package*.json ./
RUN npm install --only=production

COPY src/ .

EXPOSE 3000
#ENTRYPOINT ["/usr/bin/pdftotext"]

CMD [ "npm", "start" ]
