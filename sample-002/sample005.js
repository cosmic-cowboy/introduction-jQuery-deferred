// .thenにただの関数を渡している場合、.then()が返すPromiseはひとつ前のPromiseの状態を自動的に引き継ぐ
// "rejected"の状態をリレーするが、どのPromiseにも.failの登録がない場合、何もされない
// doneに登録した処理ががスキップされたように見える

$(document).ready(function(){

	delayError()
	.then(hello1)
	.then(hello1)
	.fail(function(e){
		assert(true, e);
		assert(true, 'エラーを処理しました');
	});
});