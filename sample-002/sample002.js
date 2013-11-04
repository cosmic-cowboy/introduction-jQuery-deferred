// Promiseオブジェクトが
// "resolved" .done()に登録したコールバックが起動
// "rejected" .fail()に登録したコールバックが起動

$(document).ready(function(){
	// 関数宣言の場合は最初に宣言する
	// 成功した場合
	var success = function(){
		assert(true, "成功しました");
	};
	// 失敗した場合
	var failure = function(){
		assert(true, "失敗しました");
	};

	delayHello().then(success, failure);
	delayError().then(success, failure);

});