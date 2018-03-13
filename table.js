/* This script will construct a table and linked to index.html */

//DEFAULT_BOARD_SIZE = 8; 

var img_array =[];

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
                // console.log(tableInfo);
                // console.log("         ");                
            }
        tableInfo += "</tr>";    
        // console.log(tableInfo);
    }
    tableInfo += "</table></div>";  
    return tableInfo;
}

// function load_img(imgToLoad) {
//     var loaded = false;
//     var counter = 0;
//     for( var i=0; i<imgToLoad.length; i++){
//         var img = new Image();
//         console.log(imgToLoad.length);
//         img.onload = function() {
//             counter++;
//             //console.log(imgToLoad[i]);
//             console.log(counter);
//             if(counter == imgToLoad.length){
//                 loaded = true;
//             }
//         }
//         img.src = imgToLoad[i];
//         console.log(img.src);
//         img_array = img;
        
//     }
//     console.log(loaded);
// }

// function drawBoard() {
//     load_img(['./graphics/blue-candy.png', './graphics/blue-special.png', 
//                 './graphics/green-candy.png', './graphics/green-special.png',
//                 './graphics/orange-candy.png', './graphics/orange-special.png',
//                 './graphics/purple-candy.png', './graphics/purple-special.png',
//                 './graphics/red-candy.png', './graphics/red-special.png',
//                 './graphics/yellow-candy.png', './graphics/color-bomb.png']);

//     var canvas = "<div class'p-2 align-self-center' style='margin:-10px;'> <canvas class='CanvasDraw'>";
//     ctx = canvas.getContext('2d');
//     for(var row = 0; row < DEFAULT_BOARD_SIZE; row++){
//             for(var col = 0; col < DEFAULT_BOARD_SIZE; col++) {
//                 var colorBack =  board.getCandyAt(row, col);
//                 console.log(colorBack);
//                 ctx.d
               
//             }
//         // console.log(tableInfo);
//     }

// }
