
function assert(value, desc){
	var resultList = $("#results");
	var li = $('<li></li>');
	li.addClass(value ? "pass" : "fail");
	li.text(desc);
	resultList.append(li);
}