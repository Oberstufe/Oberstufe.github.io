var db = new Database();
db.array = [];

function Database () {
	this.database = [];
	this.insert = function (obj) {
		this.database.push(obj);
	};
	this.where = function (prop, val) {
		if (!prop) {
			//return this.database;
			console.log("unknown prop");
			console.log(this.database);
		};
		for (var resArr = [], i = 0; i < this.database.length; i++) {
			if (this.database[i][prop] === val) {
				resArr.push(this.database[i].name);		//hier .name hinzugefügt
			};
		};
		return resArr;
	};
	this.update = function (whereprop, whereVal, updateprop, updateVal) {
		for (var i = 0; i < this.database.length; i++) {
			if (this.database[i][hereprop] === whereVal) {
				this.database[i][updateprop] = updateVal;
			};
		};
	};
	this.delete = function (prop, val) {
		if (!prop) {
			var currentDatabase = this.database;
			this.database = [];
			return currentDatabase;
		};
		for (var i = 0; i < this.database.length; i++) {
			if (this.database[i][prop] === val) {
				return this.database.splice(i, 1);
			};
		};
	};
};