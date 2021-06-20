let p_score = 0;
let pc_score = 0;


// game function contain all the action perform and result shown
const game = () => {
    const p_img = document.querySelector(".player_img");
    const pc_img = document.querySelector(".pc_img");
    const actionBtn = document.querySelectorAll(".actions button");
    const playerScore = document.querySelector(".player_score p");
    const pcScore = document.querySelector(".pc_score p")



    function playGame() {
        actionBtn.forEach(action => {
            action.addEventListener('click', function () {
                const pc_option = ['rock', 'scissors', 'paper'];
                const selectByPc = pc_option[Math.floor(Math.random() * 3)];
                const selectByP = action.innerText;
                p_img.setAttribute("src", `${selectByP}.png`);
                pc_img.setAttribute("src", `${selectByPc}.png`);
                winner(selectByP, selectByPc);
                playerScore.innerText = p_score;
                pcScore.innerText = pc_score;
            })
        });
    }

    // Finding winner
    function winner(player, pc) {
        const infromText = document.querySelector(".status h2")
        if (player === pc) {
            infromText.innerText = 'The game is a tie.';
            return
        }
        if (player === "rock" && pc === 'scissors') {
            infromText.innerText = 'Player is a winner';
            p_score++;
            return;
            
        } else if (player === "scissors" && pc === "paper") {
            
            infromText.innerText = 'Player is a winner';
            p_score++;
            return;
            
        } else if (player === 'paper' && pc === "rock") {
            
            infromText.innerText = 'Player is a winner';
            p_score++;
            return;
            
        } else {
            infromText.innerText = 'Pc is a winner';
            pc_score++;
            return;
        }
    }   
    playGame();

}

game();