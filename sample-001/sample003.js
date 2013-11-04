// sleep()の返却値を返す関数を作成.then()に渡す
// 入れ子をすべて解消
// deferredオブジェクトを返却しない場合は.resolve()が呼ばれた状態なのかな？
$(document).ready(function(){

	assert(true,"1回目");
	sleep(1000)
	.then(function(){assert(true,"2回目");})
	.then(function(){return sleep(1000);})
	.then(function(){assert(true,"3回目");});

});