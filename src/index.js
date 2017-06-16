import _ from 'lodash';

function component () {
  var element = document.createElement('div');
  var temp = undefined;

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // test for tree shaking isEmpty function
  console.log(_.isEmpty(temp));

  return element;
}

document.body.appendChild(component());