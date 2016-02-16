// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!

describe('`let` restricts the scope of the variable to the current block', () => {

  describe('`let` vs. `var`', () => {

    it('`var` works as usual', () => {
      if (true) {
        //let varX = true;
        var varX = true; // im gonna miss you var
      }
      assert.equal(varX, true);
    });
    
    it('`let` restricts scope to inside the block', () => {
      if (true) {
        // var letX = true;
        let letX = true; // let for var
      }
      assert.throws(() => console.log(letX));
    });
    
  });

  describe('`let` usage', () => {
    
    it('`let` use in `for` loops', () => {
      let obj = {x: 1};
      // for (var key in obj) {}
      for (let key in obj) {} // let for var
      assert.throws(() => console.log(key));
    });
    
    it('create artifical scope, using curly braces', () => {
      {
        // var letX = true;
        let letX = true; // let for var
      }
      assert.throws(() => console.log(letX));
    });
    
  });
  
});
