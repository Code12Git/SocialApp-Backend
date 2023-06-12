FROM node:18
WORKDIR /app
COPY ./package.json ./package.json
COPY ./server.js ./server.js
COPY ./postModel.js ./postModel.js
COPY ./userModel.js ./userModel.js
RUN yarn install 
EXPOSE 7000
CMD ["node", "server.js"]