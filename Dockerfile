FROM php:7.4-apache

LABEL maintainer="Tom Gregory"

RUN docker-php-ext-install pdo_mysql

# PHP configuration
COPY docker/php/php.ini /usr/local/etc/php/php.ini

# Apache configuration
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

#Copy our app folder to the image
COPY app /srv/app

#Set the working directory in the image
WORKDIR /srv/app