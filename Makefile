#!/usr/bin/make

.PHONY: install
install:
	./scripts/install.sh

.PHONY: test
test:
	./scripts/test.sh

.PHONY: delint
delint:
	./scripts/delint.sh
