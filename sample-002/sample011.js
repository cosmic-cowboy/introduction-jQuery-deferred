// $.when ()による並列連結
// $.when()が返すPromiseを.then()でつなぎ合わせる

$(document).ready(function(){

	//一部分だけ抜き出して関数化
	var delayHelloParallel = function () {
		return $.when(
			delayHello(),
			delayHello(),
			delayHello()
		);
	};

	delayHello()
	.then(delayHello)
	.then(delayHelloParallel)
	.then(delayHello)
	.then(delayHelloParallel)
	.then(delayHello);

});