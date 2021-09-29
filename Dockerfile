FROM php:7.4-apache

LABEL maintainer="Tom Gregory"

RUN docker-php-ext-install pdo_mysql

# Apache configuration
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

# PHP configuration
COPY docker/php/php.ini /usr/local/etc/php/php.ini

#Copy our public folder to the working directory
COPY app /srv/app

#Set the working directory in the image
WORKDIR /srv/app
