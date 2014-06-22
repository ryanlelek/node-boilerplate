#!/bin/bash

# Switch to this script's location
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";
cd $DIR/../;

# Install necessary files
npm install;
