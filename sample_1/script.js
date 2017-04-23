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
d3.selectAll('.item:nth-child(2n+1)').text("Selecting every odd element")