/* Magic Mirror Config Sample
/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
    {
        module: 'aiclient',
        position: 'middle_center' // This can be any of the regions.
    },
    {
    	module: 'aiclientdebugger',
    	position: 'bottom_right'
    },

    
  
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Indian Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: ""
					}
					

				]
			}
		},
		
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: ""
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: ""
			}
		},
		{
			module: 'iFrame',
			position: 'bottom_bar',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
					url: "ENTER IN URL",
					"width": "200%", // Optional. Default: 100%
					"height": "200px" //Optional. Default: 100px
				}
			},
	

		
		{
			module: 'googlemap',
			position: 'top_bar',
			config: {
				apikey: 'AIzaSyCt_7Kc0Ot-ToTJGmIhjDCe_hFevoeviig',
				origin: 'Mulund ',
				destination: 'Nerul',
			}
	 },
	 
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Hindustan Times",
						url: "http://www.hindustantimes.com/rss/topnews/rssfeed.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},

		
  

	{
		module: 'email',
                position: 'bottom_left',
                header: 'Email',
                config: {
                    accounts: [
                        {
                            user: 'venkatraman.poojari15@siesgst.ac.in',
                            password: 'edenhazard',
                            host: 'imap.gmail.com',
                            port: 993,
                            tls: true,
                            authTimeout: 10000,
                            numberOfEmails: 6,

                        },
                        
                    ],
                    fade: false,
                    maxCharacters: 30
                }
	},


	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
