var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Exception = require('./Exception');

var ArgumentException = (function (_super) {
    __extends(ArgumentException, _super);
    function ArgumentException(varName, extraMessage) {
        if (typeof extraMessage === "undefined") { extraMessage = ''; }
        _super.call(this, "Argument '" + varName + "' is invalid." + (extraMessage ? ' :' + extraMessage : ''));
    }
    return ArgumentException;
})(Exception);

module.exports = ArgumentException;
//# sourceMappingURL=ArgumentException.js.map
