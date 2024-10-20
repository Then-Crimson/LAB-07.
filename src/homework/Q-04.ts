(() => {

  /* APLICA DRY */

  function calculateOperation(a: number, b: number, c: number): number {
    return (a + b) * c;
  }

  function calculateArea(shape: 'rectangle' | 'circle', ...dimensions: number[]): number {
    if (shape === 'rectangle') {
      const [length, width] = dimensions;
      return length * width;
    } else if (shape === 'circle') {
      const [radius] = dimensions;
      return Math.PI * radius * radius;
    }
    throw new Error('Unknown shape');
  }

  //No es necesario aumentar codigo en este ejercicio
  function validateEmail(email: string): boolean {
    //...some code for validate here
    return validate(email, 'email');
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return validate(username, 'username');
  }

})();
