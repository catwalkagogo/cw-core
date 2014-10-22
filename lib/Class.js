var Class = (function () {
    function Class() {
    }
    Class.getClassName = function (obj) {
        if (obj == null) {
        }

        return Class.getFunctionName(obj.constructor);
    };

    Class.getFunctionName = function (func) {
        var results = /function (.{1,})\(/.exec(func.toString());
        return (results && results.length > 1) ? results[1] : null;
    };

    Class.getFunctionNames = function (obj) {
        var functions = [];

        for (var p in obj) {
            if (p != 'constructor' && typeof (obj[p]) == 'function') {
                functions.push(p);
            }
        }

        return functions;
    };
    return Class;
})();

module.exports = Class;
//# sourceMappingURL=Class.js.map
