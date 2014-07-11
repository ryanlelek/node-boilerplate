#!/usr/bin/make

.PHONY: install
install:
	# Install Node.js Modules
	npm install

.PHONY: clean
clean:
	# Remove generated files
	rm -rf ./node_modules/ ./coverage/

.PHONY: start
start:
	# Start the HTTP server
	node ./app/server.js

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
