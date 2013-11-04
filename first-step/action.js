// actionを一元管理する
// 実行を司る
var action = {};

(function () {


	var _globalActionMap = {};
	var _globalActionRegistry = function(action){
		if(action in _globalActionMap){
			return $.when(_globalActionMap[action]);
		}
		return $.when();
	};

	var _run = function(signal, event){
		_globalActionRegistry(signal).then(function (handler) {
			handler.apply(event.currentTarget,[event]);
		});
	};
	var _activate = function(){

		$(document).delegate("[data-action]", "click", function(event){
			_run($(this).data("action"), event);
		});
	};

	action = {
		map : function(actionMap){
			$.extend(_globalActionMap, actionMap);
			_activate();
		},
		list : function () {
			return _globalActionMap;
		}
	};
})();
