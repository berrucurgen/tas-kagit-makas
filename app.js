const modal=document.querySelector(".modal");
const modalbutton=document.querySelector(".modal button");
const game=document.querySelector(".game"); 
const pscore=document.querySelector(".player-score p");
const cscore=document.querySelector(".computer-score p");
const buttons=document.querySelectorAll(".buttons button");
const playericon=document.querySelector(".player-image img");
const computericon=document.querySelector(".computer-image img");
const scoreannounce=document.querySelector(".display");

let playerscore= 0;
let computerscore= 0;
const options= ["tas","kagit","makas"];


function baslat()
{
    modal.classList.toggle("reveal")
}

modalbutton.addEventListener("click", () =>
{
    modal.classList.toggle("reveal");
    modal.style.pointerEvents = "none";
    game.classList.toggle("reveal");
})
buttons.forEach(item => {
    item.addEventListener("click", (e) => {
        const playerchoise = e.target.getAttribute("data-value");
        console.log("playerchoise",playerchoise);
        const computerchoise = options[Math.floor(Math.random()*3)];
        console.log("computerchoise",computerchoise);
        playericon.src = "./images/tas.png";
        computericon.src = "./images/tas.png";
        playericon.classList.toggle("move");
        computericon.classList.toggle("move");
        game.classList.toggle("disablebuttons");
        setTimeout(() =>  
        {
            playericon.classList.toggle("move");
            computericon.classList.toggle("move");
            game.classList.toggle("disablebuttons");
            playericon.src = `./images/${playerchoise}.png`;
            computericon.src = `./images/${computerchoise}.png`;
            gameresult(playerchoise, computerchoise);
        },2000)

    })
})

function gameresult(playervalue, computervalue)
{
    if(playervalue ==="tas")
    {
        if(computervalue === "tas")
        {
            scoreannounce.textContent="IT'S A TIE"
        }
        else if(computervalue === "kagit")
        {
            scoreannounce.textContent="COMPUTER WINS";
            computerscore++;
            computerscore.textContent = computerscore;
        }
        else if (computervalue === "makas")
        {
            scoreannounce.textContent = "PLAYER WINS";
            playerscore++;
            pscore.textContent = playerscore;
        }
    }

if(playervalue ==="kagit")
{
    if(computervalue === "tas")
    {
        scoreannounce.textContent="PLAYER WINS"
        playerscore++;
        pscore.textContent = playerscore;
    }
    else if(computervalue === "kagit")
    {
        scoreannounce.textContent="IT'S A TIE";
    }
    else if (computervalue === "makas")
    {
        scoreannounce.textContent = "COMPUTER WINS";
        computerscore++;
        cscore.textContent = computerscore;
    }
}

if(playervalue ==="makas")
{
    if(computervalue === "tas")
    {
        scoreannounce.textContent="COMPUTER WINS"
        computerscore++;
        cscore.textContent = computerscore;
    }
    else if(computervalue === "kagit")
    {
        scoreannounce.textContent="PLAYER WINS";
        playerscore++;
        pscore.textContent = playerscore;
    }
    else if (computervalue === "makas")
    {
        scoreannounce.textContent = "IT'S A TIE";
    
    }
}
}

baslat();