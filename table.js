/* This script will construct a table and linked to index.html */

//DEFAULT_BOARD_SIZE = 8; 

function lookupLetter(num) {
    var letterArr = ["a","b","c","d","e","f","g","h"];
    return letterArr[--num];
}


function colorTable() {
    var tableInfo = "<div class='p-2 align-self-center' style='margin:-10px;'><table class='tableBorder'>";
    for(var row = 0; row < DEFAULT_BOARD_SIZE; row++){
        tableInfo += "<tr class='tableBorder'>";
            for(var col = 0; col < DEFAULT_BOARD_SIZE; col++) {
                var colName = lookupLetter(col+1);
                var colorBack =  board.getCandyAt(row, col);
                var textColor = "white";
                if( colorBack == "yellow") {
                    textColor = "#505050";
                }
                tableInfo += "<td class='tableBorder padCell text-center' style='background-color:" + colorBack +";color:" 
                                + textColor +"'>" + colName + (row+1)   +"</td>";
            }
        tableInfo += "</tr>";    
    }
    tableInfo += "</table></div>";  
    return tableInfo;
}

