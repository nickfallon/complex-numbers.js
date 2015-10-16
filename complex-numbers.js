function Complex(a,b){
	//complex number a + bi
	this.a = a;
	this.b = b;
}
Complex.prototype.clone = function () {
	//clone this and return a new complex number
	return new Complex(this.a, this.b);
}
Complex.prototype.add = function (other) {
	//add another complex number
	this.a = this.a + other.a;
	this.b = this.b + other.b;
}
Complex.prototype.addComponent = function (a,b) {
	//add another complex number
	this.a = this.a + a;
	this.b = this.b + b;
}
Complex.prototype.multiply = function(other) {
	//multiply with another complex number                
	var a = this.a;
	var b = this.b;
	var c = other.a;
	var d = other.b;
	var x = (a * c - b * d);
	var y = (a * d + b * c);
	this.a = x;
	this.b = y;
}
Complex.prototype.multiplyComponent = function (c,d) {
	//multiply with another complex number                
	var a = this.a;
	var b = this.b;                
	var x = (a * c - b * d);
	var y = (a * d + b * c);
	this.a = x;
	this.b = y;
}
