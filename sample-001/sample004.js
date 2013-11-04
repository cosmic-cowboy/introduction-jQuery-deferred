// sleep()の返却値を返す関数を作成.then()に渡す
// 入れ子をすべて解消
// .thenにただの関数を渡している場合、.then()が返すPromiseはひとつ前のPromiseの状態を自動的に引き継ぐ
$(document).ready(function(){

	$.when(
		assert(true,"1回目")
	)
	.then(function(){return sleep(1000);})
	.then(function(){assert(true,"2回目");})
	.then(function(){return sleep(1000);})
	.then(function(){assert(true,"3回目");});

});