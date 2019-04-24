// /* Magic Mirror Config Sample
//  *
//  * By Michael Teeuw http://michaelteeuw.nl
//  * MIT Licensed.
//  *
//  * For more information how you can configurate this file
//  * See https://github.com/MichMich/MagicMirror#configuration
//  *
//  */

// var config = {
// 	address: "localhost", // Address to listen on, can be:
// 	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
// 	                      // - another specific IPv4/6 to listen on a specific interface
// 	                      // - "", "0.0.0.0", "::" to listen on any interface
// 	                      // Default, when address config is left out, is "localhost"
// 	port: 8080,
// 	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
// 	                                                       // or add a specific IPv4 of 192.168.1.5 :
// 	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
// 	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
// 	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

// 	language: "en",
// 	timeFormat: 12,
// 	units: "metric",

// };

// var config = {
// 	port: 8080,

// 	language: 'en',
// 	timeFormat: 24,
// 	units: 'metric',

// 	modules: [
//     {
//         module: 'aiclient',
//         position: 'middle_center' // This can be any of the regions.
//     },
//     {
//     	module: 'aiclientdebugger',
//     	position: 'bottom_right'
//     },

// 		{
// 			module: "updatenotification",
// 			position: "top_bar"
// 		},
// 		{
// 			module: "clock",
// 			position: "top_left"
// 		},
// 		{
// 			module: "calendar",
// 			header: "Indian Holidays",
// 			position: "top_left",
// 			config: {
// 				calendars: [
// 					{
// 						symbol: "calendar-check-o ",
// 						url: ""
// 					}

// 				]
// 			}
// 		},
// 		{
// 			module: "compliments",
// 			position: "lower_third"
// 		},

// 		{
// 			module: "currentweather",
// 			position: "top_right",
// 			config: {
// 				location: "NAVI MUMBAI",
// 				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
// 				appid: "af788bb8e41729780ce0541603f8201f"
// 			}
// 		},
// 		{
// 			module: "weatherforecast",
// 			position: "top_right",
// 			header: "Weather Forecast",
// 			config: {
// 				location: "NAVI MUMBAI",
// 				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
// 				appid: "af788bb8e41729780ce0541603f8201"
// 			}
// 		},

// 		{
// 			module: "newsfeed",
// 			position: "bottom_bar",
// 			config: {
// 				feeds: [
// 					{
// 						title: "Hindustan Times",
// 						url: "http://www.hindustantimes.com/rss/topnews/rssfeed.xml"
// 					}
// 				],
// 				showSourceTitle: true,
// 				showPublishDate: true
// 			}
// 		},

//   {
//     module: 'MMM-bitcoin',
//     position: 'bottom_left',
//     config: {
//       fiat: 'usd',          // 'usd' and 'eur' available, defaults to 'usd'
//       showBefore: 'Bitcoin',    // will display before the bitcoin price, default 'Bitstamp'
//       updateInterval: 60000 // update interval in milliseconds
//     }
//   },

// 	{
// 		module: 'email',
//                 position: 'bottom_left',
//                 header: 'Email',
//                 config: {
//                     accounts: [
//                         {
//                             user: 'example@gmail.com',
//                             password: 'example',
//                             host: 'imap.gmail.com',
//                             port: 993,
//                             tls: true,
//                             authTimeout: 10000,
//                             numberOfEmails: 6,

//                         },

//                     ],
//                     fade: false,
//                     maxCharacters: 30
//                 }
// 	},

// 	]

// };

// /* Magic Mirror Config Sample
// /* Magic Mirror Config Sample
//  *
//  * By Michael Teeuw http://michaelteeuw.nl
//  * MIT Licensed.
//  */

// var config = {
// 	port: 8080,

// 	language: 'en',
// 	timeFormat: 24,
// 	units: 'metric',

// 	modules: [
//     {
//         module: 'aiclient',
//         position: 'middle_center' // This can be any of the regions.
//     },
//     {
//     	module: 'aiclientdebugger',
//     	position: 'bottom_right'
//     },

// 		{
// 			module: "updatenotification",
// 			position: "top_bar"
// 		},
// 		{
// 			module: "clock",
// 			position: "top_left"
// 		},
// 		{
// 			module: "calendar",
// 			header: "Indian Holidays",
// 			position: "top_left",
// 			config: {
// 				calendars: [
// 					{
// 						symbol: "calendar-check-o ",
// 						url: ""
// 					}

// 				]
// 			}
// 		},

// 		{
// 			module: "currentweather",
// 			position: "top_right",
// 			config: {
// 				location: "NAVI MUMBAI",
// 				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
// 				appid: "af788bb8e41729780ce0541603f8201"
// 			}
// 		},
// 		{
// 			module: "weatherforecast",
// 			position: "top_right",
// 			header: "Weather Forecast",
// 			config: {
// 				location: "NAVI MUMBAI",
// 				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
// 				appid: ""
// 			}
// 		},
// 		{
// 			module: "newsfeed",
// 			position: "bottom_bar",
// 			config: {
// 				feeds: [
// 					{
// 						title: "Hindustan Times",
// 						url: "http://www.hindustantimes.com/rss/topnews/rssfeed.xml"
// 					}
// 				],
// 				showSourceTitle: true,
// 				showPublishDate: true
// 			}
// 		},

//   {
//     module: 'MMM-bitcoin',
//     position: 'bottom_left',
//     config: {
//       fiat: 'usd',          // 'usd' and 'eur' available, defaults to 'usd'
//       showBefore: 'Bitcoin',    // will display before the bitcoin price, default 'Bitstamp'
//       updateInterval: 60000 // update interval in milliseconds
//     }
//   },

// 	{
// 		module: 'email',
//                 position: 'bottom_left',
//                 header: 'Email',
//                 config: {
//                     accounts: [
//                         {
//                             user: 'example@gmail.com',
//                             password: 'example',
//                             host: 'imap.gmail.com',
//                             port: 993,
//                             tls: true,
//                             authTimeout: 10000,
//                             numberOfEmails: 6,

//                         },

//                     ],
//                     fade: false,
//                     maxCharacters: 30
//                 }
// 	},

// 	]

// };

// /*************** DO NOT EDIT THE LINE BELOW ***************/
// if (typeof module !== 'undefined') {module.exports = config;}

// if (typeof module !== 'undefined') {module.exports = config;}

/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

/* var config = {
	address: "localhost", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "", "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "metric",

	modules: [{
			module: "alert",
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
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [ //{
					// 		symbol: "calendar-check",
					// 		url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					// 	},

					{
						symbol: "calendar",
						url: "https://calendar.google.com/calendar/ical/venkatpoojari97%40gmail.com/public/basic.ics",
					}

				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581", //ID from https://openweathermap.org/city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [{
					title: "New York Times",
					url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
				}],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

if (typeof module !== "undefined") {
	module.exports = config;
}
 */

var config = {
  port: 8080,

  language: "en",
  timeFormat: 24,
  units: "metric",

  modules: [
    //{
    // 		module: 'aiclient',
    // 		position: 'middle_center' // This can be any of the regions.
    // 	},
    // 	{
    // 		module: 'aiclientdebugger',
    // 		position: 'bottom_right'
    // 	},

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
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "calendar-check-o ",
            url:
              "https://www.calendarlabs.com/templates/ical/India-Holidays.ics"
          },
          {
            symbol: "calendar",
            url:
              "https://calendar.google.com/calendar/ical/venkatpoojari97%40gmail.com/public/basic.ics"
          }
        ]
      }
    },
    {
      module: "compliments",
      position: "lower_third"
    },

    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "NAVI MUMBAI",
        locationID: "", //ID from http://www.openweathermap.org/help/city_list.txt
        appid: "af788bb8e41729780ce0541603f8201f"
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
      module: "iFrame",
      position: "bottom_left", // This can be any of the regions.
      config: {
        // See 'Configuration options' for more information.
        url: "ENTER IN URL",
        width: "200%", // Optional. Default: 100%
        height: "100px" //Optional. Default: 100px
      }
    },

    {
      module: "googlemap",
      position: "bottom_left",
      config: {
        apikey: "AIzaSyCt_7Kc0Ot-ToTJGmIhjDCe_hFevoeviig",
        origin: "Mulund ",
        destination: "Nerul"
      }
    },
    {
      module: "aiclient",
      position: "middle_center" // This can be any of the regions.
    },
    {
      module: "aiclientdebugger",
      position: "bottom_right"
    }
  ]
};

if (typeof module !== "undefined") {
  module.exports = config;
}
