// .then ()による連結１：普通の関数を連結した場合
// .then()は.doneと.failの登録を行うだけでなく、新しいPromiseオブジェクトを返す
// 3つPromiseオブジェクトが作成されている

$(document).ready(function(){

	var p1 = delayHello();

	var p2 = p1.then(hello1);

	var p3 = p2.then(hello1);

	assert(p1 === p2, "p1とp2は同じ");
	assert(p2 === p3, "p2とp3は同じ");
	assert(p3 === p1, "p3とp1は同じ");


});