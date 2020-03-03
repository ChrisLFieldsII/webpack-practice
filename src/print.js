import _ from 'lodash';

export default function(...items) {
  return _.join(items, ' ');
}
