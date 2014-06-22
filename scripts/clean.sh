#!/bin/bash

# Switch to this script's location
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";
cd $DIR/../;

# Remove generated files
rm -rf ./node_modules/
rm -rf ./coverage/
