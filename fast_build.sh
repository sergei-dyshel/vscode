#!/usr/bin/env bash
set -x
set -e

# MacOS-specific
rm -rf ../VSCode-darwin
yarn gulp vscode-darwin
