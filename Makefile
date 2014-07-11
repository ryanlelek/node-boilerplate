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
	# Run all tests (no code coverage)
	./node_modules/mocha/bin/mocha \
		--recursive \
		-R spec \
		test/

.PHONY: delint
delint:
	./scripts/delint.sh

.PHONY: coverage
coverage:
	./scripts/coverage.sh

.PHONY: report
report:
	./scripts/report.sh
