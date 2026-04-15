const fs = require('node:fs');
const path = require('node:path');

const workspace = process.env.GITHUB_WORKSPACE;
const testSet = 'test.xml';

if (!workspace) {
    throw new Error('GITHUB_WORKSPACE is missing');
}

const filePath = path.resolve(workspace, testSet);

if (!filePath.startsWith(path.resolve(workspace) + path.sep)) {
    throw new Error('Invalid path: outside workspace');
}

if (!fs.existsSync(filePath)) {
    throw new Error(`Suite file not found: ${testSet}`);
}