# @puthnith/pin-cli

[![NPM Version](https://img.shields.io/npm/v/@puthnith/pin-cli)](https://www.npmjs.com/package/@puthnith/pin-cli) ![NPM Downloads](https://img.shields.io/npm/dw/@puthnith/pin-cli)

Generate Swedish personnummer (personal identity number)

## Install

```none
npm install -g @puthnith/pin-cli
```

## Usage

```none
λ pin --help

Options:
  -g, --gender   Specify gender otherwise random     [choices: "male", "female"]
  -f, --format   Specify format otherwise short
                                   [choices: "short", "long"] [default: "short"]
  -c, --count    Specify count otherwise 1 (max: 50)       [number] [default: 1]
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]

Examples:
  pin // 320611-5366
  pin 2020-01-01 // 200101-4451
  pin 2020-01-01 --gender female --format long // 202001010681
```

## Example

Generate `5` pins for `2020-01-01`

```none
λ pin --count 5 2020-01-01

200101-6621
200101-5326
200101-0509
200101-5763
200101-0657
```
