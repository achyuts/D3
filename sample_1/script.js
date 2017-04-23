//Item selection in d3

// Selecting an element
//d3.select('.item').text("Selecting Item 1")

// Selecting all elements
//d3.selectAll('.item').text("Selecting Item All")

// Selecting 2nd element
//d3.selectAll('.item:nth-child(2)').text("Selecting Item 2")

// Selecting every even element
//d3.selectAll('.item:nth-child(2n)').text("Selecting every even element")

// Selecting every odd element
//d3.selectAll('.item:nth-child(2n+1)').text("Selecting every odd element")

// Selecting every 3rd element
d3.selectAll('.item:nth-child(3n)').text("Selecting every 3rd element")

// Modifying the html in the 2nd element
d3.selectAll('.item:nth-child(2)').html('<strong>Strong Selection</strong>')

// Appending a div to the 4th element
d3.selectAll('.item:nth-child(4)').append('div').html('Adding value to 4th element')

// Appending a span to the first item
d3.select('.item').append('span').html(' <strong>Selection<strong>')

// Inserting span element at the 3rd position
d3.select('#chart').insert('span', ':nth-child(3)').html(' <strong>Inserting a span</strong>')

// Removing the 2nd element
d3.select('#chart .item:nth-child(2)').remove()
