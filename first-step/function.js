var actionMap = {
					alert1 : function(){
						delayHello_without_deferred("alert1がクリックされました");
					},
					alert2 : function(){
						delayHello_without_deferred("alert2がクリックされました");
					},
					alert3 : function(){
						delayHello_without_deferred("alert3がクリックされました");
					},
					alert4 : function(){
						clicked("");
					},
					alert5 : function(){
						delayHello_without_deferred("alert5がクリックされました");
					},
				};
action.map(actionMap);