#!/usr/bin/env node

const generate = require("@personnummer/generate")
const yargs = require("yargs")

const argv = yargs
  .usage("Usage: $0")
  .options({
    g: {
      alias: "gender",
      describe: "Specify gender otherwise random",
      choices: ["male", "female"],
    },
    f: {
      alias: "format",
      describe: "Specify format otherwise short",
      choices: ["short", "long"],
      default: "short",
    },
    c: {
      alias: "count",
      describe: "Specify count otherwise 1 (max: 50)",
      type: "number",
      default: 1,
    },
  })
  .alias("v", "version")
  .version("1.0.0")
  .alias("h", "help")
  .help()
  .example("pin // 320611-5366")
  .example("pin 2020-01-01 // 200101-4451")
  .example("pin 2020-01-01 --gender female --format long // 202001010681")
  .parse()

console.log()

const options = { gender: argv.gender, format: argv.format }
const date = new Date(argv._[0])
const count = Math.min(Math.max(argv.count, 1), 50)
for (let i = 0; i < count; i += 1) {
  console.log(pin(date, options))
}

function pin(date, options) {
  if (date instanceof Date && !isNaN(date)) {
    return generate(date, options)
  }
  return generate(options)
}
