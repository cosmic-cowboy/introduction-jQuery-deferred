// 非同期関数を「Deferred化」

function sleep(ms) {
	// Deferredオブジェクトを作成
	var d = new $.Deferred();

	// 非同期処理が終わればDeferredオブジェクトの.resolve()を呼び出す
	setTimeout(function(){
		d.resolve();
	}, ms);
	
	// Deferredオブジェクトから.resolve()や.reject()といった
	// 「状態を変更するメソッド」を取り除いたサブセットを返します
	// Deferredオブジェクトを直接返してしまうと、受け取った側で状態を変更でき、
	// 非同期処理そのものが終わったのかどうか保証が取れない
	return d.promise();
}