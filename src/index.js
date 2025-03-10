#!/usr/bin/env node

import { argv, stdin } from 'node:process'
import { readFile } from 'node:fs/promises'
import { Readable } from 'node:stream'
import { usage } from './help.js'

const fail = err => {
  console.error('Error:', err?.message || err)
  usage()
  process.exit(1)
}

const args = argv.slice(2).reduce(
  (o, v, i, a) => {
    if (v?.startsWith('-')) {
      o[v.replace(/^-+/, '')] = a[i + 1]
      a[i + 1] = null
    }
    return o
  },
  { f: 'json' },
)

const pos = argv.slice(2).find(v => v && !v.startsWith('-') && !args[v.replace(/^-+/, '')])
const file = args.i || args.input || pos

if (!stdin.isTTY || file || fail('no input'))
  if (!['json', 'csv'].includes(args.f)) fail(`bad format: ${args.f}`)

const read = stdin.isTTY ? readFile(file, 'utf8') : Readable.from(stdin).reduce((a, c) => a + c, '')

read.then(console.log).catch(fail)
