#!/usr/bin/env bash
set -e
name="Code - OSS.app"
rm -rf  "/Applications/$name"
cp -R "../VSCode-darwin-x64/Visual Studio Code.app" "/Applications/$name"
