/**
 * An example Express server showing off a simple integration of @simplewebauthn/server.
 *
 * The webpages served from ./public use @simplewebauthn/browser.
 */

import http from 'http';

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const {
  ENABLE_CONFORMANCE,
  ENABLE_HTTPS,
  RP_ID = 'localhost',
} = process.env;

app.use(express.static('./public/'));
app.use(express.json());
export let expectedOrigin = '';
const host = '127.0.0.1';
const port = 3000;
expectedOrigin = `http://localhost:${port}`;

http.createServer(app).listen(port, host, () => {
  console.log(`🚀 Server ready at ${expectedOrigin} (${host}:${port})`);
});