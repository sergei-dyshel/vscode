#!/usr/bin/env bash
set -x
set -e

yarn
yarn postinstall

yarn gulp compile-build
yarn gulp compile-extensions-build
yarn gulp minify-vscode

# MacOS-specific
rm -rf ../VSCode-darwin
yarn gulp vscode-darwin-min
yarn gulp vscode-darwin
