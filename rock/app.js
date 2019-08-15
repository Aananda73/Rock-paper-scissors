const game=()=>{
	let pScore=0;
	let cScore=0;
	const startGame=()=>{
		const playBtn=document.querySelector(".intro button");
		const introScreen=document.querySelector(".intro");
		const match=document.querySelector(".match");

		playBtn.addEventListener("click",()=>{
			introScreen.classList.add("fadeout")
			match.classList.remove("fadeout","fadein")
		});
	};
	const playMatch=()=>{
		const options=document.querySelectorAll(".options button");
		const playerHand=document.querySelector(".player-hand");
		const computerHand=document.querySelector(".computer-hand");
		const playerScore=document.querySelector(".player-score p");
		const computerScore=document.querySelector(".computer-score p");
		const hands=document.querySelectorAll(".hands img");

		hands.forEach(hand=>{
			hand.addEventListener("animationend",function(){
				this.style.animation="";
			});
		})


		const computerOptions=["rock","paper","scissors"]
		options.forEach(option=>{
			option.addEventListener("click",function(){
				
				const computerNumber=Math.floor(Math.random()*3);
				const computerChoice=computerOptions[computerNumber];

				

				playerHand.style.animation="shakePlayer 2s ease";
				computerHand.style.animation="shakeComputer 2s ease";

				setTimeout(()=>{
					compare(this.textContent,computerChoice);
				
				    playerScore.innerHTML=pScore;
				    computerScore.innerHTML=cScore;
				

				    playerHand.src=`./images/assets/${this.textContent}.png`;
				    computerHand.src=`./images/assets/${computerChoice}.png`;
				},2000)

			})
		});
		
	}

	const compare=(p,c)=>{
		const winner=document.querySelector(".winner");

		if(p===c){
			winner.textContent="It is a tie";
			return;
		}

		if (p==="rock"){
			if(c==="scissors"){
				winner.textContent="Player wins";
				pScore++;

			}else{
				winner.textContent="Computer wins";
				cScore++;
			}
			return;
		}

		if (p==="paper"){
			if(c==="rock"){
				winner.textContent="Player wins";
				pScore++;

			}else{
				winner.textContent="Computer wins";
				cScore++;
			}
			return;
		}
		if (p==="scissors"){
			if(c==="rock"){
				winner.textContent="Computer wins";
				cScore++;

			}else{
				winner.textContent="Player wins";
				pScore++;
			}
			return;
		}



	}

	startGame();
	playMatch();

}
game();