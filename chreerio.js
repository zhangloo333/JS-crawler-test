var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

var url = 'https://www.indeed.com/jobs?q=&l=Mountain+View%2C+CA';
request(url,function (err,resp,body) {
	var $ = cheerio.load(body);
	var companyName = $('.company');
	var companyNameText = companyName.text();
	// console.log(companyNameText);
	// $('.company').filter(function(){
	// 	var companyName = $(this);
	// 	companyNameText = companyName.text();
	// })
	// 	console.log(companyNameText);

	var jobTtile = $('.jobtitle');
	var jobTtileText = jobTtile.text();

	var location = $('.location');
	var locationText = location.text();

	var summary = $('.summary');
	var summaryText = summary.text();

	var job = {
		jobTile:jobTtileText,
		location:locationText,
		companyName:companyNameText,
		summary:summaryText
	}
		console.log(JSON.stringify(job));


});

//same result


app.listen(port);
console.log('server is runing on' + port);