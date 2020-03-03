// import _ from 'lodash';

import './styles.css';
import trash from '../assets/trash.svg';
// import print from './print';

function Component() {
  const container = document.createElement('div');

  const text = document.createElement('p');
  text.innerHTML = 'Hello Webpack';
  text.classList.add('customFont');

  const img = document.createElement('img');
  img.src = trash;
  img.alt = 'trash icon';
  img.width = 25;
  img.style = 'display: block; margin: 10px;';

  const btn = document.createElement('button');
  btn.innerHTML = 'Click Me';
  btn.onclick = async e => {
    // lazy load print module which imports lodash
    const { default: print } = await import(/* webpackChunkName: "print" */ './print');
    const printRes = print(' ', 'hello', 'to', 'the', 'world');
    text.innerHTML = text.innerHTML.concat(printRes);
  };

  container.appendChild(text);
  container.appendChild(img);
  container.appendChild(btn);

  return container;
}

let comp = Component();
document.body.appendChild(comp);

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('updating print module');

    // have to re-add the component so button onclick is updated with new print function
    document.body.removeChild(comp);
    comp = Component();
    document.body.appendChild(comp);
  });
}
