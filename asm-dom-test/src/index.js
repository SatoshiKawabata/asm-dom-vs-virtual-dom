import init from 'asm-dom';

init().then(asmDom => {
  const { h, patch } = asmDom;

  const root = document.getElementById('root');

  let vnode = h('div', {}, []);
  patch(root, vnode);

  let cnt = 0;
  const id = setInterval(() => {
    console.time('apply patch in 30000 elements');
    const list = [];
    for (let i = 0; i < 30000; i++) {
      list.push(
        h('div', {}, [ Math.random() + '' ])
      );
    }
    const newVnode = h('div', {}, list);
    patch(vnode, newVnode);
    vnode = newVnode;
    console.timeEnd('apply patch in 30000 elements');
    cnt++;
    if (cnt >= 10) {
      clearInterval(id);
    }
  }, 100);
});