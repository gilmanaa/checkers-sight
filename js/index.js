$(document).ready(function() {
    var boardLength = 8
    var board = $("#board")
    var yCounter = 0
    for (let i = 0; i < boardLength; i++) {
        var row = $("<div>")
        var xCounter = 0
        row.addClass("board-row")
        for (let j = 0; j < boardLength; j++) {
            var boardSquare = $("<div>")
            boardSquare.attr("id",`${xCounter}-${yCounter}`)
            boardSquare.addClass("board-square")
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    boardSquare.addClass("bg-white")
                } else {
                    boardSquare.addClass("bg-black")
                    if (i < 3) {
                        boardSquare.addClass("black-piece")
                    } else if (i > 4) {
                        boardSquare.addClass("white-piece")
                    }
                }
            } else {
                if (j % 2 === 0) {
                    boardSquare.addClass("bg-black")
                    if (i < 3) {
                        boardSquare.addClass("black-piece")
                    } else if (i > 4) {
                        boardSquare.addClass("white-piece")
                    }
                } else {
                    boardSquare.addClass("bg-white")
                }
            }
            boardSquare.prependTo(row)
            xCounter++
        }
        row.prependTo(board)
        yCounter++
    }
})