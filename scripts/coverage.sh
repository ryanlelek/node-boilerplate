#!/bin/bash

./node_modules/istanbul/lib/cli.js cover \
./node_modules/mocha/bin/_mocha \
  test/unit \
  test/integration;
