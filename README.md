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
npc -f <format> (-i <file> | < file) [-o <file>]
```

### Options
- `-f, --format`  Output format (csv|json) [required]
- `-i, --input`   Input file [required unless using stdin]
- `-o, --output`  Output file [optional, defaults to stdout]

### Examples

```bash
# Using stdin
cat report.json | npc -f csv
cat report.json | npc -f json -o compact.json

# Directly using noseyparker
noseyparker report -f json | npc -f csv
noseyparker report -f json | npc -f json

# Using input file
npc -f csv -i report.json
npc -f json -i report.json -o output.json

# Using npx (no installation required)
npx noseyparker-compact -f csv -i report.json
cat report.json | npx noseyparker-compact -f json
```

### Structure

```jsonc
[
  {
    "rule_name": "Generic Password",
    "mime_essence": "text/plain",
    "kind": "git_repo",
    "repo_path": "./xxxxxxxxxxxx/.git",
    "blob_path": "xxxxxxxxx/xxxxxxxxxxxxxxxx/xxxxxx.xx",
    "commit_id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "committer_name": "John",
    "committer_email": "John.Doe@acm.com",
    "committer_timestamp": "9999999999 +1000",
    "author_name": "John",
    "author_email": "John.Doe@acm.com",
    "author_timestamp": "8888888888 +1000",
    "message": "xxxx xxxxxxx, xxxxxx xxxxxxx, xxxxx xxxxxxxxx xxx xxxxxxxx",
    "source_span": "25@28:25@59",
    "offset_span": "531:563",
    "snippet_after": "# 'xxxxxxxx':\"xxxxxxxxxxxxxxxxxx\", # 'xxxx':'xxxxxxxxxxxxxxx', 'xxxx':\"xxxxxxxxxxxxxxxx\", 'xxxxxxxx':\"xxxxxxxxxxxxxxxxxxxx\"",
    "snippet_matching": "xxxxxxxx':\"xxxxxxxxxxxxxxxxxxxx\"",
    "snippet_before": "xxxxxx = { 'xxxxxxx':\"xxxxxxx.xxxxxxxxxxxxxx.xxxxx\", 'xxxxxxxxx':\"xxxxxxxxxx\", 'xxxxxx':\"xxxxx\", # 'xxxx': \"xxxxxxxxxxxxxxx\""
  },
  // ...
]
```

## License
[MIT](LICENSE)
