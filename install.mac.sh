#!/usr/bin/env bash
name="Code - OSS.app"
rm -rf "/Applications/$name"
cp -R "../VSCode-darwin/$name" "/Applications/$name"
