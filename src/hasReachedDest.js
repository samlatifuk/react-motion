import isPlainObject from 'lodash.isplainobject';

export default function hasReachedDest(expected, actual) {
  if (Array.isArray(expected)) {
    return expected.every((v, i) => hasReachedDest(v, actual[i]));
  }

  if (isPlainObject(expected)) {
    return Object.keys(expected).every(
      key => key === 'data' ? true : hasReachedDest(expected[key], actual[key])
    );
  }

  return expected === actual;
}
