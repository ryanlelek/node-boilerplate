#!/usr/bin/make

.PHONY: install
install:
	# Install Node.js Modules
	npm install

.PHONY: clean
clean:
	./scripts/clean.sh

.PHONY: start
start:
	./scripts/start.sh

.PHONY: test
test:
	./scripts/test.sh

.PHONY: delint
delint:
	./scripts/delint.sh

.PHONY: coverage
coverage:
	./scripts/coverage.sh

.PHONY: report
report:
	./scripts/report.sh
