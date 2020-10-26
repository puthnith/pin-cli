# pin-cli

Generate Swedish personnummer (personal identity number)

```sh
pin --help

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

Generate `5` pins for `2020-01-01`

```sh
pin --count 5 2020-01-01
200101-6621
200101-5326
200101-0509
200101-5763
200101-0657
```
