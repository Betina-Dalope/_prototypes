const path = require('path');

const apiPaths = [
  {
    src: 'https://www.fords.org/ajax/feeds/schedule/?key=aCmBM8R6ZFBseaJGrec2dsjA4YdZkuQA',
    destination: path.join(__dirname, '../../data/thisSchedule.json'),
  }
];

module.exports = apiPaths;