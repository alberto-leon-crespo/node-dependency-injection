import chai from 'chai';
import Reference from '../../lib/Reference';

let assert = chai.assert;

describe('Reference', () => {
  describe('id', () => {
    it('should get the right constructor id', () => {
      // Arrange.
      let id = 'foobar';

      // Act.
      let actual = new Reference(id);

      // Assert.
      assert.strictEqual(actual.id, id);
    });
  });
});