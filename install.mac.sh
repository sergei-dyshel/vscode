#!/usr/bin/env bash
set -e
name="Code - OSS.app"
rm -rf "~/temp/$name"
mv "/Applications/$name" ~/temp/ || true
cp -R "../VSCode-darwin-x64/Visual Studio Code.app" "/Applications/$name"
