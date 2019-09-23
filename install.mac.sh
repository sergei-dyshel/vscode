#!/usr/bin/env bash
name="Code - OSS.app"
rm -rf "/Applications/$name"
cp -R "../VSCode-darwin-x64/$name" "/Applications/$name"
