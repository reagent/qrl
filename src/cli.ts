#!/usr/bin/env node

import { URL } from 'url';

import * as QRCode from 'qrcode';
import { program } from 'commander';

const isUrlValid = (url: string): boolean => {
  try {
    new URL(url);
  } catch {
    return false;
  }

  return true;
};

program
  .name('qrl')
  .description('Generate a QR code with embedded URL')
  .requiredOption('-o, --output <OUTPUT>', 'Output QR code to file')
  .option('-s, --silent', 'Supress messages on STDOUT', false)
  .argument('<url>', 'URL to embed')
  .action(async (url, { output, silent }) => {
    if (!isUrlValid(url)) {
      console.error('Error: invalid URL provided');
      process.exit(1);
    }

    try {
      await QRCode.toFile(output, url);

      if (!silent) {
        console.log(`Wrote output file: "${output}"`);
      }
    } catch (e) {
      console.error(
        `Error: failed to write output file: "${(e as Error).message}"`,
      );
      process.exit(1);
    }
  })
  .showHelpAfterError();

program.parse();
