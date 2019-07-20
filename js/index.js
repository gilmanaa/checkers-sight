var checkers = {}
checkers.blackGame = [
    [1,2,2,3],
    [6,5,7,4],
    [3,2,4,3],
    [2,5,1,4],
    [2,1,3,2],
    [5,6,6,5],
    [4,3,5,4],
    [6,5,4,3],
    [4,3,2,1],
    [1,0,3,2],
    [7,6,6,5],
    [0,1,1,2],
    [4,5,5,4],
    [7,2,6,3],
    [5,4,7,2],
    [5,2,4,3],
    [6,7,7,6],
    [2,3,3,4],
    [4,7,5,6],
    [3,0,2,1],
    [3,6,2,5],
    [1,2,2,3],
    [2,7,3,6],
    [2,1,1,2],
    [1,4,0,3],
    [2,3,1,4],
    [0,3,2,1],
    [3,2,2,3],
    [2,5,0,3],
    [4,1,3,2],
    [3,6,4,5],
    [2,3,1,4],
    [4,5,2,3],
    [2,3,4,1],
    [5,0,3,2],
    [0,5,2,3],
    [2,3,4,1],
    [6,1,5,2],
    [2,1,1,0],
    [4,3,3,4],
    [0,3,1,2],
    [5,2,4,3],
    [1,2,0,1],
    [3,4,4,5],
    [5,6,3,4],
    [3,4,5,2],
    [7,0,6,1],
    [7,2,5,0] 
]
checkers.whiteGame = [
    [1,2,0,3],
    [4,5,3,4],
    [3,2,2,3],
    [3,4,1,2],
    [0,1,2,3],
    [3,6,4,5],
    [4,1,3,2],
    [4,5,3,4],
    [2,3,4,5],
    [5,6,3,4],
    [7,2,6,3],
    [2,7,3,6],
    [3,0,4,1],
    [3,6,4,5],
    [1,0,0,1],
    [3,4,4,3],
    [5,2,3,4],
    [3,4,5,6],
    [6,7,4,5],
    [4,1,5,2],
    [0,5,1,4],
    [6,3,7,4],
    [4,7,3,6],
    [7,4,5,6],
    [4,5,5,4],
    [2,1,1,2],
    [3,6,4,5],
    [5,6,4,7],
    [5,4,4,3],
    [5,2,3,4],
    [3,4,5,6],
    [1,6,0,5],
    [1,2,2,3],
    [2,5,3,4],
    [0,3,2,5],
    [3,4,1,2],
    [0,1,2,3],
    [0,7,1,6],
    [2,5,0,7],
    [0,5,1,4],
    [2,3,0,5],
    [7,6,6,5],
    [6,1,5,2],
    [6,5,7,4],
    [5,0,4,1],
    [7,4,6,3],
    [5,2,7,4]
]
checkers.illegalMove = [
    [1,2,0,3],
    [4,5,3,4],
    [3,2,2,3],
    [3,4,1,2],
    [0,1,2,3],
    [3,6,4,5],
    [4,1,3,2],
    [4,5,3,4],
    [2,3,4,5],
    [5,6,3,4],
    [7,2,6,3],
    [2,7,3,6],
    [3,0,4,1],
    [3,6,4,5],
    [1,0,0,5],
    [3,4,4,3],
    [5,2,3,4],
    [3,4,5,6],
    [6,7,4,5],
    [4,1,5,2],
    [0,5,1,4],
    [6,3,7,4],
    [4,7,3,6],
    [7,4,5,6],
    [4,5,5,4],
    [2,1,1,2],
    [3,6,4,5],
    [5,6,4,7],
    [5,4,4,3],
    [5,2,3,4],
    [3,4,5,6],
    [1,6,0,5],
    [1,2,2,3],
    [2,5,3,4],
    [0,3,2,5],
    [3,4,1,2],
    [0,1,2,3],
    [0,7,1,6],
    [2,5,0,7],
    [0,5,1,4],
    [2,3,0,5],
    [7,6,6,5],
    [6,1,5,2],
    [6,5,7,4],
    [5,0,4,1],
    [7,4,6,3],
    [5,2,7,4]
]
checkers.incompleteGame = [
    [3,2,4,3],
    [4,5,3,4],
    [5,2,6,3],
    [3,4,5,2],
    [6,1,4,3],
    [5,6,4,5],
    [7,0,6,1],
    [4,5,5,4],
    [6,3,4,5],
    [3,6,5,4],
    [5,4,3,2]
]
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
checkers.movePiece= function(curX,curY,toX,toY) {
    var curBoardPiece = $(`#${curX}-${curY}`)
    var toBoardPiece = $(`#${toX}-${toY}`)
    var xMove = Math.abs(toX - curX)
    var yMove = Math.abs(toY - curY)
    if (xMove === 1 && yMove === 1) {
        if (toBoardPiece.hasClass("black-piece") || toBoardPiece.hasClass("white-piece")) {
            console.log("Illegal Move")
            return "Illegal Move"
        }
        if (curBoardPiece.hasClass("black-piece")) {
            curBoardPiece.toggleClass("black-piece")
            toBoardPiece.toggleClass("black-piece")
        } else if (curBoardPiece.hasClass("white-piece")) {
            curBoardPiece.toggleClass("white-piece")
            toBoardPiece.toggleClass("white-piece")
        }
    } else {
        if (xMove === 2 && yMove === 2) {
            var xMoveReal = toX - curX
            var yMoveReal = toY - curY
            if (xMoveReal > 0) {
                var xOneAway = xMoveReal - 1
            } else {
                var xOneAway = xMoveReal + 1
            }
            if (yMoveReal > 0) {
                var yOneAway = yMoveReal - 1
            } else {
                var yOneAway = yMoveReal + 1
            }
            var boardPieceOneAway = $(`#${curX+xOneAway}-${curY+yOneAway}`)
            if (curBoardPiece.hasClass("black-piece")) {
                curBoardPiece.toggleClass("black-piece")
                boardPieceOneAway.toggleClass("white-piece")
                toBoardPiece.toggleClass("black-piece")
            } else {
                curBoardPiece.toggleClass("white-piece")
                boardPieceOneAway.toggleClass("black-piece")
                toBoardPiece.toggleClass("white-piece")
            }
        } else {
            console.log("Illegal Move")
            if (curBoardPiece.hasClass("black-piece")) {
                curBoardPiece.toggleClass("black-piece")
                toBoardPiece.toggleClass("black-piece")
            } else {
                curBoardPiece.toggleClass("white-piece")
                toBoardPiece.toggleClass("white-piece")
            }
            return "Illegal Move"
        }
    }
    var whiteCount = $(".white-piece")
    var blackCount = $(".black-piece")
    if (whiteCount.length === 0) {
        return "Black Wins!"
    } else if (blackCount.length === 0) {
        return "White Wins!"
    } else {
        return "Incomplete Game"
    }
}
checkers.playGame = function(game) {
    var counter = 0
    var play = setInterval(function() {
        var status = checkers.movePiece(game[counter][0],game[counter][1],game[counter][2],game[counter][3])
        if (status === "Illegal Move") {
            clearInterval(play)
            var gameNotification = $("<div>")
            gameNotification.addClass("game-notification")
            gameNotification.text(status + ` - Move # ${counter+1}`)
            gameNotification.appendTo(document.getElementById("board-container"))
        }
        counter++
        if (counter === game.length) {
            clearInterval(play)
            var gameNotification = $("<div>")
            gameNotification.addClass("game-notification")
            gameNotification.text(status)
            gameNotification.appendTo(document.getElementById("board-container"))
        }
    },1000)
}