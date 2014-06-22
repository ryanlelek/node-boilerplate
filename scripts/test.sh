#!/bin/bash

# Switch to this script's location
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";
cd $DIR/../;

# Run tests with Mocha
./node_modules/mocha/bin/mocha --recursive -R spec \
  test/unit \
  test/integration;
