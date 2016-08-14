function Table() {
    //sets attributes
    this.header = [];
    this.data = [[]];
    this.tableClass = ''
}

Table.prototype.setHeader = function(keys) {
    //sets header data
    this.header = keys
    return this
}

Table.prototype.setData = function(data) {
    //sets the main data
    this.data = data
    return this
}

Table.prototype.setTableClass = function(tableClass) {
    //sets the table class name
    this.tableClass = tableClass
}


Table.prototype.build = function(container) {

    //default selector
    container = container || '.table-container'
 
    //creates table
    var table = $('<table></table>').addClass(this.tableClass)

    var tr = $('<tr></tr>') //creates row
    var th = $('<th></th>') //creates table header cells
    var td = $('<td></td>') //creates table cells

    var header = tr.clone() //creates header row

    //fills header row
    this.header.forEach(function(d) {
        header.append(th.clone().text(d))
    })

    //attaches header row
    table.append($('<thead></thead>').append(header))
    
    //creates 
    var tbody = $('<tbody></tbody>')

    //fills out the table body
    this.data.forEach(function(d) {
        var row = tr.clone() //creates a row
        d.forEach(function(e,j) {
            row.append(td.clone().text(e)) //fills in the row
        })
        tbody.append(row) //puts row on the tbody
    })
 
    $(container).append(table.append(tbody)) //puts entire table in the container

    return this
}

//sample data
var data = {
    k: ['Name', 'Ocupation', 'Salary', 'Roommate'],
    v: [['Chandler', 'IT Procurement Manager', '$120,000', 'Joey'],
        ['Joey', 'Out-of-work Actor', '$50,000', 'Chandler'],
        ['Monica', 'Chef', '$80,000', 'Rachel'],
        ['Rachel', 'Assistant Buyer', '$70,000', 'Monica'],
        ['Ross', 'Dinosaurs', '$100,000', 'No Roommate']]
}

//creates new table object
var table = new Table()
    
//sets table data and builds it
table
    .setHeader(data.k)
    .setData(data.v)
    .build()
