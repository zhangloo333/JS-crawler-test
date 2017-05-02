const request = require('request');
const cheerio = require('cheerio');



//export 

exports.imgScrape = (url,cb) => {
	    "use strict";

	request(url,(error,resp,body) => {
		if(error) {
			cb({
				error:error
			});
		}

		let $ = cheerio.load(body);
		let $url = url;
		let $img = $('.post-images img').attr('src');
		let $title= $('.post-title').text();
		let $desc = $('[itemprop=description]').text();
	

	// send back a object
	let image = {
		url: $url,
		img:"http:" + $img,
		title: $title,
		description: $desc
	}

	//response 
	console.log('scraped from scraper.js',image);
	cb(image);

	});
}