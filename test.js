const fs = require('node:fs');
const path = require('node:path');

const workspace = process.env.GITHUB_WORKSPACE;
const testSet = process.env.TEST_SET;

if (!workspace) {
    throw new Error('GITHUB_WORKSPACE is missing');
}