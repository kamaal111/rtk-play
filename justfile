default:
	just --list

run-dev-website:
    just website/run-dev

run-dev-server:
	just server/run-dev

migrate-server:
	just server/migrate

bootstrap:
	just website/bootstrap
	just server/bootstrap

install-node-modules:
	#!/bin/zsh

	bun i
