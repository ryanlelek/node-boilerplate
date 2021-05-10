#!/usr/bin/make

VERSION = $(shell cat package.json | jq .version | tr -d '"')

# Default action if you just run "make"
.PHONY: all
all: clean install

.PHONY: clean
clean: remove_files drop_database

.PHONY:
remove_files:
	# Remove generated files
	rm -rf ./package-lock.json ./node_modules/ ./coverage/ ./.nyc_output/

.PHONY: drop_database
drop_database:
	# Drop Database
	#mongo boilerplate --eval "db.dropDatabase()"

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
	# Run tests with code coverage
	./node_modules/.bin/nyc --reporter=lcov --reporter=text-summary \
	./node_modules/mocha/bin/_mocha -- \
		--recursive \
		-R spec \
		test/

.PHONY: unit
unit:
	# Run unit tests with code coverage
	./node_modules/.bin/nyc --reporter=lcov --reporter=text-summary \
	./node_modules/mocha/bin/_mocha -- \
		--recursive \
		-R spec \
		test/unit/

.PHONY: integration
integration:
	# Run integration tests with code coverage
	./node_modules/.bin/nyc --reporter=lcov --reporter=text-summary \
	./node_modules/mocha/bin/_mocha -- \
		--recursive \
		-R spec \
		test/integration/

.PHONY: report
report:
	# Launching Code Coverage Report in Browser
	open ./coverage/lcov-report/index.html

.PHONY: start
start:
	# Start the HTTP server
	node ./server.js

.PHONY: d_build
d_build:
	docker build -t node-boilerplate:$(VERSION) .

.PHONY: d_run
d_run:
	-docker stop --time 5 node-boilerplate
	docker run --rm -d --name node-boilerplate -p 3000:3000 node-boilerplate:$(VERSION)

.PHONY: d_stop
d_stop:
	docker stop --time 5 node-boilerplate
