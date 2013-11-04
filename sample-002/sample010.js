// $.when ()による並列連結
// $.when()が返すPromiseを.then()でつなぎ合わせる

$(document).ready(function(){

	delayHello()
	.then(delayHello)
	.then(function(){
		return $.when(
			delayHello(),
			delayHello(),
			delayHello()
		);
	})
	.then(delayHello)
	.then(function(){
		return $.when(
			delayHello(),
			delayHello(),
			delayHello());
	})
	.then(delayHello);
});