FROM node:latest as builder

WORKDIR /usr/src/app
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY . ./
RUN npm install
RUN npm run build

# Stage 2 - Deploy with NGNIX
FROM nginx:1.15.2-alpine 
EXPOSE 3001
COPY --from=builder /usr/src/app/dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx","-g","daemon off;"]