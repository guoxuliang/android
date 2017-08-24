/**
 * 热线
 */
;define(function(require, exports, module){



	module.exports = {
		onCreate : function(winObj){
			$("#aigov-header-back-btn").hide();
			$('.tagMenu').click(function(){
				var me = $(this);
				var tag = me.data('tag');
				if(tag){
					aigovApp.openAppWindow(tag);
				}else{
					var msg = me.data('msg');
					if (msg) {
						aigovApp.nativeFunc.alert(msg);
					}else{
						var url = me.data('url');
						if(url){
							window.plugins.webPlugin.open("互动沟通",url);
						}
					}
				}
			});
		},
		//退回事件
        onBack:function(){
        	//刷新
        	//this.appWindow.getComponent('serviceDatalist').refresh();
        }

	};
});
