const tenMinWalk = require('../src/tenMinWalk')

describe('tenMinWalk', () => {

  test('it returns false if there are not 10 elements in the array', () => {
    expect(tenMinWalk(['w', 's'])).toEqual(false);
  });

  test('it returns true if the walk takes 10 minutes', () => {
    expect(tenMinWalk(['w', 'w', 'w', 'w', 'w', 'e', 'e', 'e', 'e', 'e'])).toEqual(true);
  });

});
