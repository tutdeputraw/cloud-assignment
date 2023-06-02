# Backend Dockerfile
FROM node:16.14-alpine

WORKDIR /app/backend

COPY package.json ./
# RUN yarn install

COPY . .

COPY ./config.js ./
COPY ./migrations ./migrations

EXPOSE 4000
# CMD ["npx", "sequelize-cli", "db:migrate", "--env", "development", "&&", "node", "app.js"]
CMD [ "yarn", "start" ]
