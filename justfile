default:
	just --list

run-dev: install-node-modules
    #!/bin/zsh

    bun dev

bootstrap: install-node-modules

install-node-modules:
	#!/bin/zsh

	bun i
