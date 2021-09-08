# Already a starting image
FROM php:7.4-apache 

#optional
LABEL maintainer="Christy Carlson"

#Set working directory of container in the image. When it's running, save to this path
WORKDIR /var/www/html

#Copy our public folder to the working directory. Dot means current directory. Dot dot means upper repository
COPY public .
