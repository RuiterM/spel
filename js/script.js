let count = 0;

let gamedata = {started: false, rounds_started: false, movecount: 0, movelist: [], round_move_count: 0};

// reset het spel
function reset_game()
{
    gamedata.started = false;
    gamedata.rounds_started = false;
    gamedata.movecount = 0;
    gamedata.movelist = [];
    gamedata.round_move_count = 0;
}
//timer
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
//random nummer (block) generator
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// start button
document.getElementById('start').addEventListener('click', function (event) {
    if (!gamedata.started)
    {   //kiest een random block
        gamedata.started = true;
        let curblock = random(1, 4);
        //kleurt het block rood
        document.getElementById("block" + curblock).style.backgroundColor = "red";
        //zorgt ervoor dat het block voor een halve seconde (500 miliseconden) rood blijft
        sleep(500).then(() => {
            document.getElementById("block" + curblock).style.backgroundColor = "";
        })

        gamedata.movelist.push(curblock);
        gamedata.rounds_started = true;
    }
});

// rounds
function move_handler(move)
{   //als je het heb gehaald na een aantal rondes (gamedata.movelist.lengt) dan h=laat hij een foto zien met "je hebt het gehaald"
    if (gamedata.movelist.length == 4) {
        window.location.href='https://bloemenkaartjesenzo.nl/image/cache/catalog/Bloemenkaartjes/Kraft/Art.%202069%20Gehaald-500x500.jpg';
    }
    gamedata.rounds_started = false;
    
    if (gamedata.movelist[gamedata.round_move_count] == move)
    {
        if (gamedata.movecount == gamedata.round_move_count)
        {
            gamedata.round_move_count = 0;
        }
        else
        {
            gamedata.round_move_count++;
            
        }
        //zorgt ervoor dat er een nieuw block word gekozen
        console.log(gamedata.movelist.length);
        for (let i = 0; i < gamedata.movelist.length; i++)
        {
            console.log(gamedata.movelist.length);
            document.getElementById("block" + gamedata.movelist[i]).style.backgroundColor = "blue";
            //timer voor hoelang de block gekleurd blijft
            sleep(500).then(() => {
                document.getElementById("block" + gamedata.movelist[i]).style.backgroundColor = "";
            })
            //confirmation om te kijken of hij hem ziet
            console.log("asd");
        }
        
        let curblock = random(1, 4);
    
        document.getElementById("block" + curblock).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    
        sleep(500).then(() => {
            document.getElementById("block" + curblock).style.backgroundColor = "";
        })

        gamedata.movecount++;
        gamedata.movelist.push(curblock);
        gamedata.rounds_started = true;

    }
    else
    {
        alert("fout, probeer opnieuw") + reset_game();
    }
}

// blocks
//dit zorgt ervoor dat elk block anders is
document.getElementById('block1').addEventListener('click', function (event) {
    if (gamedata.started && gamedata.rounds_started)
    {
        move_handler(1);
    }
});

document.getElementById('block2').addEventListener('click', function (event) {
    if (gamedata.started && gamedata.rounds_started)
    {
        move_handler(2);
    }
});

document.getElementById('block3').addEventListener('click', function (event) {
    if (gamedata.started && gamedata.rounds_started)
    {
        move_handler(3);
    }
});

document.getElementById('block4').addEventListener('click', function (event) {
    if (gamedata.started && gamedata.rounds_started)
    {
        move_handler(4);
    }
});