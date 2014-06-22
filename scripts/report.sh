#!/bin/bash

# Switch to this script's location
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";
cd $DIR/../;

# Launch code coverage report in browser
open ./coverage/lcov-report/index.html;
