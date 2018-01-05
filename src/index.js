module.exports = function isPointsOnLine(points) {
  const uniq = arr => {
    const hashTable = new Map();
    return arr.filter(function (el) {
      const key = JSON.stringify(el);
      return (hashTable.has(key) ? false : hashTable.set(key, null));
    });
  }

  const uniqArr = uniq(points);
  if(uniqArr.length < 3) return true;

  const elem = uniqArr.shift();
  if(uniqArr.some(ar => ar[0] === elem[0])) return true;

  const elem2 = uniqArr.shift();

  const x1 = elem[0];
  const x2 = elem2[0];
  const y1 = elem[1];
  const y2 = elem2[1];

  const ratio = (y2 - y1) / (x2 - x1);

  if(uniqArr.some(ar => ratio === (ar[1] - y1) / (ar[0] - x1))) return true;

  return false;
}
