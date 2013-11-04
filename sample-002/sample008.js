// .then()による連結3 ：エラーからの復帰
// .failに設定したコールバックが別のPromiseを返し、
// なおかつそのPromiseが"resolved"になったとき、
// 後続のPromiseをエラー状態から復帰させることができます。

$(document).ready(function(){

	delayError()
	.then(hello1,  function(e){
		assert(true, e);
		assert(true, 'エラーから回復しました');
		return new $.Deferred().resolve().promise();
	}).then(hello1, hello2);
});