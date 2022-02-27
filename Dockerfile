FROM node:lts-alpine as base

WORKDIR /code
ENV PATH /code/node_modules/.bin:$PATH

COPY ./package*.json ./
RUN npm install
RUN npm cache clean --force
COPY ./ ./
ENV NODE_ENV production
RUN npm run build

FROM nginx:latest 
EXPOSE 80
COPY --from=base /code/dist /usr/share/nginx/html/
