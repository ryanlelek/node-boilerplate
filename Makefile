#!/usr/bin/make

.PHONY: install
install:
	npm install

.PHONY: test
test:
	./scripts/test.sh
