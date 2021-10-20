import _ from 'lodash';
import './style.css';
import './teststyle.less';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', '!'], ' ');
  element.classList.add('hello');
  element.classList.add('helloo');

  return element;
}

document.body.appendChild(component());
