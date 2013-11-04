// .then()による連結２：Promise を返す関数を連結した場合
// .then()でつないでいくと、非同期処理にも関わらず1つずつ順番に実行できる
// （コールバックの入れ子を解消できる）
// 先頭のdelayHello()が返すPromise(p1)と、
// そのPromiseの.doneが返すPromise(p2)と、
// .then()によって生成されたPromise(p3)で
// 3つのPromiseオブジェクトが作成される
// .then()でつなぐことで、順番を取り扱う

$(document).ready(function(){

	delayHello()
	.then(delayHello)
	.then(delayHello)
	.then(delayHello)
	.then(delayHello);
});