FROM nginx:alpine

COPY dist/ashnewproject/browser /usr/share/nginx/html

EXPOSE 80
