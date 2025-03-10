export const ansi = new Proxy(
  { f: 3, b: 4 },
  {
    get:
      (t, [m, c]) =>
      (...a) =>
        process.stdout.write(`\x1b[${t[m]}${c}m${a.join(' ')}\x1b[0m\n`),
  },
)

export const usage = () =>
  console.error(`
Usage: npc [-f csv|json] [-i file] [file]
   or: npc [-f csv|json] < file

Options:
  -f, --format    Output format (default: json)
  -i, --input     Input file (optional)

Examples:
  npc -f csv < report.json
  npc -f json -i report.json
  npc report.json
`)
