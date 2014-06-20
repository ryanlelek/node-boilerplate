#!/bin/bash

./node_modules/mocha/bin/mocha --recursive -R spec \
  test/unit \
  test/integration;
