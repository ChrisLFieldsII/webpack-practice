import _ from 'lodash';

import './styles.css';
import trash from '../assets/trash.svg';

function component() {
  const container = document.createElement('div');

  const text = document.createElement('p');
  text.innerHTML = _.join(['Hello', 'webpack'], ' ');
  text.classList.add('customFont');

  const img = document.createElement('img');
  img.src = trash;
  img.alt = 'trash icon';
  img.width = 25;

  container.appendChild(text);
  container.appendChild(img);

  return container;
}

document.body.appendChild(component());
