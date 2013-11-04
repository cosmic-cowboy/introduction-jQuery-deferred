// $.when ()による並列連結
// $.when()は複数のPromiseをまとめた、新しいPromiseを返す
// $.when()が返すものもまたPromiseオブジェクト
// $.when()に渡したPromiseがすべて"resolved"になったとき、とりまとめたPromiseが"resolved"に
// 逆に言うと、ひとつでも"pending"が残っている限りは処理が進まない
// 非同期処理を並列実行しつつ、全ての処理が終わるのを待つことができる


$(document).ready(function(){

	$.when(
		delayHello(),
		delayHello(),
		delayHello()
	).done(
		hello1
	);
});