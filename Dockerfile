FROM nginx:alpine

COPY dist/ashnewproject/browser /usr/share/nginx/html

EXPOSE 80
# Step 1: Build Angular app
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# Step 2: Serve app using nginx
FROM nginx:alpine

COPY --from=build /app/dist/ashnewproject/browser /usr/share/nginx/html

EXPOSE 80

