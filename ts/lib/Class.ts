class Class {
	public static getClassName(obj: Object): string {
		if(obj == null) {
		}

		return Class.getFunctionName(obj.constructor);
	}

	public static getFunctionName(func: Function) {
		var results = /function (.{1,})\(/.exec(func.toString());
		return (results && results.length > 1) ? results[1] : null;
	}

	public static getFunctionNames(obj: Object): string[] {
		var functions: string[] = [];

		for(var p in obj) {
			if(p != 'constructor' && typeof (obj[p]) == 'function') {
				functions.push(p);
			}
		}

		return functions;
	}
}

export = Class;