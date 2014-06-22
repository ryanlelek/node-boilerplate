#!/bin/bash

# Switch to this script's location
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";
cd $DIR/../;

# Run JSHint on files
./node_modules/jshint/bin/jshint app/ test/
