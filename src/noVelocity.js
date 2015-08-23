const methods = {
  data() {
    return true;
  },
  transform(x) {
    if (typeof x !== 'object') {
      throw new Error('asdf');
    }

    return Object.keys(x).every(transformName => {
      return x[transformName].every(val => val === 0);
    });
  },
};

export default function noVelocity(currVelocityObj) {
  return Object.keys(currVelocityObj).every(propName => {
    const propValue = currVelocityObj[propName];
    if (methods[propName]) {
      return methods[propName](propValue);
    }
    return propValue === 0;
  });
}
