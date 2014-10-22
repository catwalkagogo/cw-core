import _ = require('underscore');

class Arr {
	public static get(array: any[], key: any, defaultValue?) {
		if(arguments.length >= 3) {
			if(_.has(array, key)) {
				return array[key];
			} else {
				return defaultValue;
			}
		} else {
			return array[key];
		}
	}
}

export = Arr;