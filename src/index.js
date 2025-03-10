#!/usr/bin/env node

import { argv, stdin, stdout } from 'node:process'
import { readFile, writeFile } from 'node:fs/promises'
import { Readable } from 'node:stream'
import usage from './help.js'

const fail = err => {
  console.error('Error:', err?.message || err)
  usage()
  process.exit(1)
}

const args = argv.slice(2).reduce((o, v, i, a) => {
  if (v?.startsWith('-')) {
    const key = v.replace(/^-+/, '')
    o[key] = a[i + 1]
    a[i + 1] = null
  }
  return o
}, {})

// Validate required format
const format = args.f || args.format || fail('format (-f) is required')
if (!['json', 'csv'].includes(format)) fail(`invalid format: ${format}`)

// Validate input source
const input = args.i || args.input
if (!stdin.isTTY && input) fail('cannot use both stdin and input file')
if (stdin.isTTY && !input) fail('input (-i) is required when not using stdin')

// Setup input/output streams
const read = stdin.isTTY
  ? readFile(input, 'utf8')
  : Readable.from(stdin).reduce((a, c) => a + c, '')

const output = args.o || args.output
const write = data => (output ? writeFile(output, data) : stdout.write(`${data}\n`))

// For now, just pipe the input to output
read.then(write).catch(fail)
