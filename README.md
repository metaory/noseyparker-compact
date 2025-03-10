<div align="center">
  <h3><code>noseyparker-compact</code></h3>
  <img src=".github/assets/block.png" alt="noseyparker-compact" width="30%" />
  <br>
  <h5>
    compact report formatters for
    <a href="https://github.com/praetorian-inc/noseyparker">noseyparker</a>
  </h5>
  <div>
    <a href="#install">Install</a> |
    <a href="#usage">Usage</a> |
    <a href="#license">License</a>
  </div>
  <hr>
  <p>transforms verbose <code>noseyparker</code> <kbd>JSON</kbd> reports</p>
  <p>into concise summaries in <kbd>JSON</kbd> or <kbd>CSV</kbd> format</p>
</div>


## Install

```bash
npm install -g noseyparker-compact
```

## Usage

```bash
npc [-f csv|json] [-i file] [file]
# or
npc [-f csv|json] < file
```

### Options
- `-f, --format`  Output format (default: json)
- `-i, --input`   Input file (optional)

### Examples

```bash
# Using npx (no installation required)
npx noseyparker-compact report.json
npx noseyparker-compact -f csv < report.json

# Using stdin
noseyparker report -f json | npc -f csv
cat report.json | npc -f json

# Using file argument
npc -f csv report.json
npc -i report.json -f json
npc report.json
```

## License
[MIT](LICENSE)
