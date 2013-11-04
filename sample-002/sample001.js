// Promise オブジェクトの基本構造
// jQuery.Deferredが生成するオブジェクトで、DeferredはPromiseを内包
// DeferredとPromiseは常に1対1で作成され、対応するDeferredだけがPromiseの内部状態を変更できる
// Promiseオブジェクトは概念的には、
// 状態(.state)
// 状態がresolvedになった時に実行されるコールバック(.done)
// 状態がrejectedになった時に実行されるコールバック(.fail)

$(document).ready(function(){

	var promise = delayHello();

	// 成功した場合
	promise.done(function(){
		assert(true, "成功しました");
	});

	// 失敗した場合
	promise.fail(function(){
		assert(true, "失敗しました");
	});
});