import Class = require('./Class');

class Exception implements Error {
	private _name;
	private _message;

	public constructor(message: string) {
		this._name = Class.getClassName(this);
		this._message = message;
	}

	public get name(): string {
		return this._name;
	}

	public get message(): string {
		return this._message;
	}

}

export = Exception;