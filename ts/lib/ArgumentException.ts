import Exception = require('./Exception');

class ArgumentException extends Exception{
	public constructor(varName: string, extraMessage:string='') {
		super("Argument '" + varName + "' is invalid." + (extraMessage ? ' :' + extraMessage : ''));
	}
}

export = ArgumentException;