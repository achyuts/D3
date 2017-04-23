// Replaces class item with class highlight
//d3.selectAll('.item').attr('class', 'highlight')

// Adds class highlight to class item
//d3.selectAll('.item:nth-child(3)').classed('highlight', true)

// Adding and removing the classes
d3.selectAll('.item:nth-child(3)').classed({'highlight': true, 'item':false, 'bigger':true})


// in d3 style for the element can be specificed in js
d3.selectAll('.item:nth-child(4)').
	style({
		'background':'#268d2',
		'font-size':'160%'
	})