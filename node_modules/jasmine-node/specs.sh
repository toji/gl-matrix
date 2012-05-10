#!/usr/bin/env bash

entry="node lib/jasmine-node/cli.js "

echo "Running all tests located in the spec directory"
command=$entry"spec"
echo $command
time $command #/nested/uber-nested
echo -e "\033[1;35m--- Should have 40 tests and 74 assertions and 1 Failure. ---\033[0m"
echo ""

echo "Running all tests located in the spec directory with coffee option"
command=$entry"--coffee spec"
echo $command
time $command #/nested/uber-nested
echo -e "\033[1;35m--- Should have 43 tests and 77 assertions and 2 Failures. ---\033[0m"
echo ""

echo "Running all tests located in the spec directory with requirejs option"
#command=$entry"--nohelpers --runWithRequireJs spec-requirejs"
command=$entry"--runWithRequireJs ./"
echo $command
time $command
echo -e "\033[1;35m--- Should have 41 tests and 76 assertions and 1 Failure. ---\033[0m"
