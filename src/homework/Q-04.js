(function () {
    /* APLICA DRY */
    function calculateOperation(a, b, c) {
        return (a + b) * c;
    }
    function calculateArea(shape) {
        var dimensions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dimensions[_i - 1] = arguments[_i];
        }
        if (shape === 'rectangle') {
            var length_1 = dimensions[0], width = dimensions[1];
            return length_1 * width;
        }
        else if (shape === 'circle') {
            var radius = dimensions[0];
            return Math.PI * radius * radius;
        }
        throw new Error('Unknown shape');
    }
    //No es necesario aumentar codigo en este ejercicio
    function validateEmail(email) {
        //...some code for validate here
        return false;
    }
    function validateUsername(username) {
        //...some code for validate here
        return false;
    }
})();
