var _ = require('underscore');

var Accessor = (function () {
    function Accessor(data) {
        if (typeof data === "undefined") { data = {}; }
        this._data = _.extend({}, data);
    }
    Accessor.prototype.access = function (keyOrData, value) {
        if (arguments.length == 0) {
            return this._data;
        } else if (arguments.length == 1) {
            if (_.isObject(keyOrData)) {
                this._data = _.extend(this._data, keyOrData);
            } else {
                value = this._data[keyOrData];
                return value;
            }
        } else {
            this._data[keyOrData] = value;
        }
    };
    return Accessor;
})();

module.exports = Accessor;
//# sourceMappingURL=Accessor.js.map
