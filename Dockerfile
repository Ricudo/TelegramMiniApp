FROM node:16-alpine
WORKDIR /app
COPY bot/package*.json ./
RUN npm ci
COPY ./bot .
ENV PORT=3000
EXPOSE $PORT
CMD ["npm", "start"]