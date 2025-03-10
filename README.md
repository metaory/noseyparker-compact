<div align="center">
    <b>noseyparker-compact</b>
    <br>
    <img src=".github/assets/block.png" alt="noseyparker-compact" width="40%" />
    <br>
    <b>compact report formatters for</b>
    <a href="https://github.com/praetorian-inc/noseyparker">noseyparker</a>
</div>


---


`noseyparker-compact` is a lightweight CLI tool
that transforms verbose `noseyparker` JSON reports
into concise, gist-style summaries in JSON or CSV format

It accepts input via stdin or a file
and outputs the processed report to stdout or a specified file

---

## Installation

```bash
# Run directly with npx
npx noseyparker-compact --help

# Or install globally
npm install -g noseyparker-compact
```

---

## Synopsis

```ini
noseyparker-compact [-i|--input] [-o|--output] [-f|--format]
```

---

## Usage

```bash
# Generate a compact summary from a noseyparker report
noseyparker report -f json | npx noseyparker-compact -f json
noseyparker report -f json | npx noseyparker-compact -f csv

# Save Output to a File
noseyparker report -f json | npx noseyparker-compact -f json -o compact.json
noseyparker report -f json | npx noseyparker-compact -f csv -o compact.csv

# Process an Existing Report File
npx noseyparker-compact -i noseyparker-report.json -f json -o compact.json
npx noseyparker-compact -i noseyparker-report.json -f csv -o compact.csv
```

---

### Example Output

#### Compact JSON

```json
{
  "findings": [
    {
      "secret_type": "AWS Access Key",
      "file": "config.json",
      "line": 12,
      "match": "AKIA***************"
    }
  ]
}
```

#### Compact CSV

```csv
secret_type,file,line,match
AWS Access Key,config.json,12,AKIA***************
```

---

License
-------
[MIT](LICENSE)
