var App = (function() {
	var options = {
		isDev : true,
		supportsVibrate : "vibrate" in navigator
	},

	//internal app settings
	settings = {
		appName : 'DefaultApp',
		xhrCall : null
	},


	//the app itself
	app = {

		//public methods
		pub : {
			init : function(opts) {
				if(typeof opts !== 'undefined'){
					utils.extend(options, opts);
				}
				utils.log('App inited');
			},

			// Getter/Setter 
			// App.setting('appName') returns 'DefaultApp'
			// App.setting('appName', 'MyApp') returns 'MyApp'
			setting : function(option, value){
				var retVal = false;
				if(typeof settings[options] !== 'undefined'){
					if(typeof value !== 'undefined'){ settings[options] = value; }
					retVal = settings[options];
				}
				return retVal;
			},

			//make utils object public
			utils : utils

		},

		//private methods
		priv : {

		}

	},

	//utils to be used where ever
	utils = {
		extend : function(){
			for(var i=1; i<arguments.length; i++){
	        	for(var key in arguments[i]){
	            	if(arguments[i].hasOwnProperty(key)){
	                	arguments[0][key] = arguments[i][key];
	            	}
	        	}
	        }
	   		return arguments[0];
		},

		log : function() {
			if (options.isDev && typeof console !== 'undefined' && console.log) {
				console.log(settings.appName + '-DEBUG :', arguments);
			}
		}
	};

	return app.pub;
})();
