// thenを使い、コードを見やすく
// ただし、入れ子は解消されず
$(document).ready(function(){

	assert(true,"1回目");
	sleep(1000).then(function(){
		assert(true,"2回目");
		sleep(1000).then(function(){
			assert(true,"3回目");
		});
	});
});