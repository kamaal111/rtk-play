default:
	just --list

run-dev-website:
    just website/run-dev

run-dev-server:
	just server/run-dev

create-super-user email:
	just server/create-super-user {{ email }}

bootstrap:
	just website/bootstrap
	just server/bootstrap

install-node-modules:
	#!/bin/zsh

	bun i
