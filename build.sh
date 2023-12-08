#!/usr/bin/env bash
set -x
set -e

yarn
yarn postinstall

yarn gulp compile-build
yarn gulp compile-extension-media
yarn gulp compile-extensions-build
yarn gulp minify-vscode

# MacOS-specific
rm -rf ../VSCode-darwin-x64
yarn gulp vscode-darwin-x64-min-ci
# yarn gulp vscode-darwin-x64
