var Class = require('./Class');

var Exception = (function () {
    function Exception(message) {
        this._name = Class.getClassName(this);
        this._message = message;
    }
    Object.defineProperty(Exception.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Exception.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    return Exception;
})();

module.exports = Exception;
//# sourceMappingURL=Exception.js.map
