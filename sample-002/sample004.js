// .then ()による連結１：普通の関数を連結した場合
// .then()は.doneと.failの登録を行うだけでなく、新しいPromiseオブジェクトを返す
// 3つPromiseオブジェクトが作成されている
// .thenにただの関数を渡している場合、.then()が返すPromiseはひとつ前のPromiseの状態を自動的に引き継ぐ
$(document).ready(function(){

	delayHello()
	.then(hello1)
	.then(hello1);

});