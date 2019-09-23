#!/usr/bin/env bash
set -x
set -e

# MacOS-specific
rm -rf ../VSCode-darwin-x64
yarn gulp vscode-darwin-x64-min
yarn gulp vscode-darwin-x64
