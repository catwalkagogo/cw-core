var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Exception = require('./Exception');

var ArgumentNullException = (function (_super) {
    __extends(ArgumentNullException, _super);
    function ArgumentNullException(varName) {
        _super.call(this, "Argument '" + varName + "' is null");
    }
    return ArgumentNullException;
})(Exception);

module.exports = ArgumentNullException;
//# sourceMappingURL=ArgumentNullException.js.map
