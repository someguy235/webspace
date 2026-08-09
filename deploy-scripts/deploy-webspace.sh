#!/bin/bash

echo ""

echo "sourcing .bashrc for nvm..."
# Load profile so NVM and its PATH additions are available in non-login shells
export HOME="${HOME:-$(eval echo ~$(whoami))}"
[ -f "$HOME/.bash_profile" ] && source "$HOME/.bash_profile"
[ -f "$HOME/.bashrc" ] && source "$HOME/.bashrc"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

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