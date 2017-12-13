const h = require('virtual-dom/h');
const diff = require('virtual-dom/diff');
const patch = require('virtual-dom/patch');
const createElement = require('virtual-dom/create-element');

let cnt = 0;
let tree = h('div', {}, []);
let rootNode = createElement(tree);
document.body.appendChild(rootNode);

const id = setInterval(function () {
  console.time('apply patch in 30000 elements');
  const list = [];
  for (let i = 0; i < 30000; i++) {
    list.push(
    h('div', {}, [ Math.random() + '' ])
    );
  }
  const newTree = h('div', {}, list);
  const patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  tree = newTree;
  console.timeEnd('apply patch in 30000 elements');
  cnt++;
  if (cnt >= 10) {
    clearInterval(id);
  }
}, 1000);