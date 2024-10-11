FROM node:20 AS dev-deps
WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

FROM node:20 AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM nginx:1.23.3 AS prod
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html
COPY src/assets /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf 
COPY /nginx/nginx.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]
