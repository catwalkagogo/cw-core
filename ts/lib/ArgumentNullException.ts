import Exception = require('./Exception');

class ArgumentNullException extends Exception{
	public constructor(varName: string) {
		super("Argument '" + varName + "' is null");
	}
}

export = ArgumentNullException;