#!/usr/bin/make

.PHONY: install
install:
	npm install

.PHONY: test
test:
	./scripts/test.sh

.PHONY: delint
delint:
	./scripts/delint.sh
