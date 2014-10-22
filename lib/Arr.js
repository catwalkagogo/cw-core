var _ = require('underscore');

var Arr = (function () {
    function Arr() {
    }
    Arr.get = function (array, key, defaultValue) {
        if (arguments.length >= 3) {
            if (_.has(array, key)) {
                return array[key];
            } else {
                return defaultValue;
            }
        } else {
            return array[key];
        }
    };
    return Arr;
})();

module.exports = Arr;
//# sourceMappingURL=Arr.js.map
