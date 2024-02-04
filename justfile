default:
	just --list

run-dev-website:
    just website/run-dev

bootstrap:
	just website/bootstrap

install-node-modules:
	#!/bin/zsh

	bun i
