#!/usr/bin/env node

import { URL } from 'url';

import QRCode from 'qrcode';
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
  .argument('<url>', 'URL to embed')
  .action(async (url, { output }) => {
    if (!isUrlValid(url)) {
      console.error('Invalid URL provided');
      process.exit(1);
    }

    await QRCode.toFile(output, url);
  })
  .showHelpAfterError();

program.parse();
