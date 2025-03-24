import path from 'path';
import fs from 'fs';

const { PWD } = process.env;

const basePath = PWD || '/';
const compPath = path.resolve(basePath, 'src');

const getDirList = (path) => {
  return fs
    .readdirSync(path, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

export const getComponentsList = () => {
  const groupsList = getDirList(compPath);
  return groupsList;
};
