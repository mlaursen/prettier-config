# prettier-config

My main prettier config.

## Installation

```sh
pnpm add -D @mlaursen/prettier-config prettier
```

Next, create a `.prettierrc.yaml` file so `nvim` formats the repo:

```sh
echo '"@mlaursen/eslint-config"' > .prettierrc.yaml
```

Finally, create a `.prettierignore` file with whatever:

```sh
cat > .prettierignore << EOF
pnpm*.yaml
node_modules
coverage/

CHANGELOG.md

.next
EOF
```

## Extending

The default `importOrder` is:

```yaml
importOrder:
  - "<THIRD_PARTY_MODULES>"
  - "^@/(.*)$"
  - "^[./]"
```

Just modify as needed in the `.prettierrc.yaml`
