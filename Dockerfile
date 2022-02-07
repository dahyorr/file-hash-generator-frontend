FROM node:lts-slim as base

WORKDIR /code
ENV PATH /code/node_modules/.bin:$PATH

COPY ./package*.json ./
RUN npm install
RUN npm cache clean --force
COPY ./ ./

FROM base as builder
ENV NODE_ENV production
RUN npm run build

FROM nginx:latest as production
EXPOSE 80
# copy nginx config
COPY --from=builder /code/dist /usr/share/nginx/html/


FROM base as dev
EXPOSE 3000
ENV NODE_ENV development
CMD ["npm", "run", "dev"]

# FROM Base as Test
# ENV NODE_ENV test
# RUN npm run test
