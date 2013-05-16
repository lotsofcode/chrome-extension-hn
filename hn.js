// Hacker News Color Extension for Chrome by Martin "dalys" Lissmats 

var point_spans = $("body > center > table > tbody > tr:nth-child(3) > td > table > tbody span:contains(points)");
var points_regex = /(\d+)(?:\spoints)/;

var hn_id_regex = /(?:score\_)(\d+)/;

var intensity_steps = 5;
var max_points = 300;

$(point_spans).each(function(index, span){

	var points = parseInt(points_regex.exec($(span).html())[1],10);
		
	var hn_id = hn_id_regex.exec($(span).attr('id'));
	hn_id = hn_id[1];

	var arrow_td = $("body > center > table > tbody > tr:nth-child(3) > td > table > tbody a#up_" + hn_id).parent().parent();

	var intensity = 0;

	if (points >= 1 && points < max_points) intensity = Math.floor(points/(max_points / (intensity_steps))) % intensity_steps;
	else if (points >= max_points) intensity = intensity_steps;

	var colors = {
		"0": "255,255,178",
		"1": "254,217,118",
		"2": "254,178,76",
		"3": "253,141,60",
		"4": "240,59,32",
		"5": "189,0,38"
	}

	arrow_td.css({"border-bottom-width": "3", "border-bottom-style": "solid", "border-bottom-color": "rgb(" + colors[intensity] + ")"});
});
