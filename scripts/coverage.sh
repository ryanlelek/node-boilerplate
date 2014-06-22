#!/bin/bash

# Switch to this script's location
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";
cd $DIR/../;

# Run code coverage tests
./node_modules/istanbul/lib/cli.js cover \
./node_modules/mocha/bin/_mocha \
  test/unit \
  test/integration;
