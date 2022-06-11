#!/bin/bash

echo ""

echo "move to deploy folder..."
cd /var/www/webspace

echo "updating from github..."
git pull

echo "installing dependencies..."
npm ci

echo "cleaning dist directory..."
rm -r dist

echo "building app..."
npm run build

echo "copy static resources..."
cp ./resources/files/* ./dist

echo "restarting server..."
sudo /usr/sbin/service nginx restart