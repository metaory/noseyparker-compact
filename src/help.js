export default () =>
  console.error(`
Usage: npc -f <format> (-i <file> | < file) [-o <file>]

Options:
  -f, --format    Output format (csv|json) [required]
  -i, --input     Input file [required unless using stdin]
  -o, --output    Output file [optional, defaults to stdout]

Examples:
  npc -f csv -i report.json
  npc -f json -i report.json -o compact.json
  cat report.json | npc -f csv
  noseyparker report -f json | npc -f csv
`)
