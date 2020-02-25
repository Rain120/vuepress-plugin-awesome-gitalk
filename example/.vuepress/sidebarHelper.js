const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../');
const ignore = ['images', '.vuepress', '.DS_Store'];
const README_REG = /README/;

const mapper = code => {
  return {
    'Docs': 'docs',
    'Ignore': 'ignore',
  }[code];
}

const isFile = ({ dir = filePath, fPath }) =>
  fs.statSync(path.join(dir, fPath)).isFile();

function syncDirPath(file = filePath) {
  return fs.readdirSync(file) || [];
}

function helper({ dir, fPath }) {
  return {
    title: mapper(fPath) || `${fPath}`,
    path: `/${fPath}/`,
    collapsable: true,
  }
}

function sidebarHelper(dir = filePath) {
  return syncDirPath(dir)
    .filter(fPath => !isFile({ fPath }) && !ignore.includes(fPath))
    .map((fPath, dirIndex) => {
      return helper({ dir, fPath }) || [];
    });
}

module.exports = {
  sidebarHelper
};
