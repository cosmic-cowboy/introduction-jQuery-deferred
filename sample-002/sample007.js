// .then()による連結２：Promise を返す関数を連結した場合
// .then()の代わりに.done()を使うと、
// 単に.doneのコールバックを二つ登録しただけの状態になり、順番に実行されない。
// 2つ目以降の非同期処理が同時に始まる

$(document).ready(function(){

	delayHello()
	.done(delayHello)
	.done(delayHello);
});