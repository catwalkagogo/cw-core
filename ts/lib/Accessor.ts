import _ = require('underscore');

class Accessor {
	private _data: {};

	public constructor(data: Object= {}) {
		this._data = _.extend({}, data);
	}

	public access(): any;
	public access(key: string): any;
	public access(key: string, value: any): void;
	public access(data: Object): void;
	public access(keyOrData?: any, value?: any): any {
		if(arguments.length == 0) {
			return this._data;
		} else if(arguments.length == 1) {
			// get or data
			if(_.isObject(keyOrData)) {
				this._data = _.extend(this._data, keyOrData);
			} else {
				value = this._data[keyOrData];
				return value;
			}
		} else {
			// set
			this._data[keyOrData] = value;
		}
	}
}

export = Accessor;