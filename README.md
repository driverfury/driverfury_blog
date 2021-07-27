# driverfury's blog

## Description

This is my blog. [Live demo](http://driverfury.altervista.org).

## Project setup
```
npm install
composer install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

And host ```dist``` wherever you want.

### Setup .htaccess
You need this .htaccess file in the ```public``` folder

```
RewriteEngine On
RewriteBase /

RewriteCond %{THE_REQUEST} /public/([^\s?]*) [NC]
RewriteRule ^ %1 [L,NE,R=302]

RewriteRule ^((?!public/).*)$ public/$1 [L,NC]
```

And this .htaccess in the ```public/api``` folder in order to make backend work:

```
RewriteEngine On
RewriteBase /api/

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.php [QSA,L]
```

