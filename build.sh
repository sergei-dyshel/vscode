#!/usr/bin/env bash
set -x
set -e

npm install
npm run postinstall

npm run compile-build
npm run compile-extensions-build
npm run gulp compile-extension-media-build
npm run minify-vscode

# MacOS-specific
rm -rf ../VSCode-darwin-arm64
npm run gulp vscode-darwin-arm64-min-ci
# yarn gulp vscode-darwin-x64
