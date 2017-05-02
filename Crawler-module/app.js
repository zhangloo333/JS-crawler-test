const scraper = require('./scraper');
const fs = require('fs');
const util = require('util');

const url = 'http://imgur.com/gallery/4UAoW';

//callback example
// var destination = fs.createWriteStream('./download/image.json');

scraper.imgScrape(url,(data)=>{
		// data = JSON.stringify(data);

	fs.writeFile('./download/image.json', util.inspect(data),'utf-8');
	console.log('data from scraper received');
	console.log(typeof data);
})