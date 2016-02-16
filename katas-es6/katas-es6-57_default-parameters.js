// 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('default parameters make function parameters more flexible', () => {

  it('define it using an assignment to the parameter `function(param=1){}`', function() {
    // let number = (int) => int;
    let number = (int=0) => int;
    
    assert.equal(number(), 0);
  });

  it('it is used when undefined is passed', function() {
    let number = (int = 23) => int;
    // const param = 42;
    const param = undefined;
    
    assert.equal(number(param), 23);
  });

  it('it is not used when a value is given', function() {
    function xhr(method) {
      return method;  
    }
    
    assert.equal(xhr('POST'), 'POST');
  });

  it('it is evaluated at run time', function() {
    // let defaultValue;
    let defaultValue = 42; // derp! its the easy ones that getcha :P
    function xhr(method = `value: ${defaultValue}`) {
      
      return method;  
    }
    
    assert.equal(xhr(), 'value: 42');
    defaultValue = 23;
  });

  it('it can also be a function', function() {
    // let defaultValue;
    let defaultValue = () => {};
    function fn(value = defaultValue()) {
      return value;  
    }
    
    assert.equal(fn(), defaultValue());
  });
  
});