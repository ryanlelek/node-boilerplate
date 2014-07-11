#!/usr/bin/make

# Default action if you just run "make"
.PHONY: all
all: clean install start

.PHONY: clean
clean:
	# Remove generated files
	rm -rf ./node_modules/ ./coverage/

.PHONY:
remove_files:
	# Remove generated files
	rm -rf ./node_modules/ ./coverage/

.PHONY: drop_database
drop_database:
	# Drop Database
	mongo boilerplate --eval "db.dropDatabase()"

.PHONY: install
install:
	# Install Node.js Modules
	npm install

.PHONY: delint
delint:
	# Delint Files with JSHint
	./node_modules/jshint/bin/jshint \
		app/ \
		test/

.PHONY: test
test:
	# Run all tests (no code coverage)
	./node_modules/mocha/bin/mocha \
		--recursive \
		-R spec \
		test/

.PHONY: coverage
coverage:
	# Run unit tests with code coverage
	./node_modules/istanbul/lib/cli.js cover \
	./node_modules/mocha/bin/_mocha -- \
		--recursive \
		-R spec \
		test/

.PHONY: report
report:
	# Launching Code Coverage Report in Browser
	open ./coverage/lcov-report/index.html

.PHONY: start
start:
	# Start the HTTP server
	node ./app/server.js
