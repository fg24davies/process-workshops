
function tenMinWalk(array) {
  westArray = [];
  eastArray = [];
  if (array.length != 10) {
    return false;
  } else {
    for( let i = 0; i < array.length; i++) {
      if (array[i] == 'w') {
        westArray.push(array[i])
      } else {
        eastArray.push(array[i])
      }
    }
    if (westArray.length == eastArray.length) {
      return true;
    } else {
      return false;
    }
  }
};




module.exports = tenMinWalk