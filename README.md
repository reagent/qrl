# URL QR Code Generator

A commandline app to quickly generate a QR code containing an embedded URL.

## Installation

Install globally with Yarn:

```
yarn global add @reagent/qrl
```

Or npm:

```
npm install -g @reagent/qrl
```

## Usage

Provide the desired URL and output file:

```
qrl -o google.png https://google.com
```

Viewing the resulting QR code with an appropriate reader will allow you to open
the target URL in your web browser.
