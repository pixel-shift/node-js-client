#!/usr/bin/env bash
pushd PixelshiftApi
rm -rf node_modules
rm -rf package-lock.json
npm install
popd
pushd client
rm -rf node_modules
rm -rf package-lock.json
npm install
popd