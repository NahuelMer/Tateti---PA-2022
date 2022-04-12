//Para backend, separar funciones como getElementById para obtener el player para separar el negocio de la vista
//Entonces el getElementById recibe el parametro que le manda el html. Todo eso sirve si esto fuera OO
//El tablero seria un objeto con cada casilla como atributo

let drawAux = null;
let endAux = null;
let turnCounter = 0;
let movesX = 0;
let movesO = 0;

function start() {
    let input1 = document.getElementById("user1").value;
    let input2 = document.getElementById("user2").value;

    if (input1 == "" || input2 == "" || input1 == null || input2 == null) {
        setMsg("Debe ingresar un nombre para ambos jugadores");
        return;

    } else {
        document.getElementById("user1").disabled = true;
        document.getElementById("user2").disabled = true;
        document.getElementById("playInput").disabled = true;
        drawAux = false;
        endAux = false;
        document.turn = "X";
        setMsg(input1 + " comienza el juego");
    };
};

function restart() {
    document.getElementById("user1").value = "";
    document.getElementById("user2").value = "";
    location.reload();
}

function setMsg(msg) {
    document.getElementById("msg").innerText = msg;
};

function nextMove(cell) {
    console.log(endAux)
    if (endAux == false) {
        if (cell.innerText == "" || cell.innerText == null) {
            turnCounter++;
            cell.innerText = document.turn;
            nextTurn();
        } else {
            setMsg("Esta celda ya esta ocupada");
        }
    } else {
        return;
    };
};

function nextTurn() {
    verify()
    if (endAux == false) {
        if (document.turn == "X") {
            document.turn = "O";
            movesO++;
            setMsg("Es el turno de " + document.getElementById("user2").value);

        } else {
            document.turn = "X";
            movesX++;
            setMsg("Es el turno de " + document.getElementById("user1").value);
        };

    } else {
        return;
    }


};

function verify() {

    if (document.getElementById("0").innerText == document.turn && document.getElementById("4").innerText == document.turn && document.getElementById("8").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("2").innerText == document.turn && document.getElementById("4").innerText == document.turn && document.getElementById("6").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("0").innerText == document.turn && document.getElementById("1").innerText == document.turn && document.getElementById("2").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("3").innerText == document.turn && document.getElementById("4").innerText == document.turn && document.getElementById("5").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("6").innerText == document.turn && document.getElementById("7").innerText == document.turn && document.getElementById("8").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("0").innerText == document.turn && document.getElementById("3").innerText == document.turn && document.getElementById("6").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("1").innerText == document.turn && document.getElementById("4").innerText == document.turn && document.getElementById("7").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("2").innerText == document.turn && document.getElementById("5").innerText == document.turn && document.getElementById("8").innerText == document.turn) {
        endGame();
        return;
    };

    if (turnCounter == 9) {
        gameDraw();
        return;
    }
};

function gameDraw() {
    setMsg("Partida terminada");
    alert("Empate! Nadie gana");
    drawAux = true;
    endAux = true;
    // resumen();
}

function endGame() {
    setMsg("Partida terminada");
    if (document.turn == "X") {
        alert("El GANADOR ES: " + document.getElementById("user1").value);
    } else {
        alert("El GANADOR ES: " + document.getElementById("user2").value);
    }
    endAux = true;
    // resumen();
}

// function resumen() {

//     let input1 = document.getElementById("user1").value;
//     let input2 = document.getElementById("user2").value;

//     let j1 = {
//         "Nombre": input1,
//         "Movimientos": movesX,
//         "Estado": ""
//     }

//     let j2 = {
//         "Nombre": input2,
//         "Movimientos": movesO,
//         "Estado": ""
//     }

//     if (drawAux == true) {
//         j1.Estado = "Empatado"
//         j2.Estado = "Empatado"
//     } else {
//         if (document.turn == "X") {
//             j1.Estado = "Ganador"
//             j2.Estado = "Perdedor"
//         } else {
//             j1.Estado = "Perdedor"
//             j2.Estado = "Ganador"
//         }
//     }

//     //Resumen

//     let jsonNJ1 = JSON.stringify(j1.Nombre, undefined, 2);
//     let jsonMJ1 = JSON.stringify(j1.Movimientos, undefined, 2);
//     let jsonSJ1 = JSON.stringify(j1.Estado, undefined, 2);

//     let jsonNJ2 = JSON.stringify(j2.Nombre, undefined, 2);
//     let jsonMJ2 = JSON.stringify(j2.Movimientos, undefined, 2);
//     let jsonSJ2 = JSON.stringify(j2.Estado, undefined, 2);

//     alert(`Resultados: ` + jsonNJ1 + ` Movimientos: ` + jsonMJ1 + ` Estado: ` + jsonSJ1 + `
//                         ` + jsonNJ2 + ` Movimientos: ` + jsonMJ2 + ` Estado: ` + jsonSJ2);
    

// }