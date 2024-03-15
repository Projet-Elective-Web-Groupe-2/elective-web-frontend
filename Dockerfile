FROM node:20.11.1-bullseye-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]