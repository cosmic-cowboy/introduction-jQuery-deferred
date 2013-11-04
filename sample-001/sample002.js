// .then()に渡した関数がDeferredを返す場合、.then()を連結する形に書き換える
// 入れ子をひとつ解消
$(document).ready(function(){

	assert(true,"1回目");
	sleep(1000)
	.then(function(){
		assert(true,"2回目");
		return sleep(1000);
	})
	.then(function(){
			assert(true,"3回目");
	});
});