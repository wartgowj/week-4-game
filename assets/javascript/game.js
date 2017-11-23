$(document).ready(function() {

	var score = 0;
	var wins = 0;
	var losses = 0;
	var gem1;
	var gem2;
	var gem3;
	var gem4;
	var target;

	//puts initial values into wins, losses, and score
	$('.wins').text('Wins: ' + wins);
	$('.losses').text('Losses: ' + losses);
	$('.score').text(score);

	function generateTarget(){
	//create random number from 10-120 for target
	target=Math.floor(Math.random()*101+19);
	// appending target to target-num
	$('.target-num').text(target);
	

	}

	function generateGemNums (){
		gem1 = Math.floor(Math.random()*12+1);
		gem2 = Math.floor(Math.random()*12+1);
		gem3 = Math.floor(Math.random()*12+1);
		gem4 = Math.floor(Math.random()*12+1);

	}

	function reset(){
		score=0;
		$(".score").text(0);
		generateTarget();
		generateGemNums();
		console.log("target " + target);
		console.log("gem1 " + gem1);
		console.log("gem2 " + gem2);
		console.log("gem3 " + gem3);
		console.log("gem4 " + gem4);
	}

	function win(){
		wins++;
		$('.wins').text('Wins: ' + wins);
		reset();
		alert("YOU WIN!!")
	}

	function lose(){
		losses++;
		$('.losses').text('Losses: ' + losses);
		reset();
		alert("SORRY, YOU LOST");
	}

	$('.redGem').on('click', function(){
		score = score + gem1;
		console.log("New score= " + score);
		$(".score").text(score);

			if(score == target){
				win();
			}
			else if(score > target){
				lose();
			}
	});

	$('.blueGem').on('click', function(){
		score = score + gem2;
		console.log("New score= " + score);
		$(".score").text(score);

			if(score == target){
				win();
			}
			else if(score > target){
				lose();
			}
	});

	$('.greenGem').on('click', function(){
		score = score + gem3;
		console.log("New score= " + score);
		$(".score").text(score);

			if(score == target){
				win();
			}
			else if(score > target){
				lose();
			}
	});

	$('.yellowGem').on('click', function(){
		score = score + gem4;
		console.log("New score= " + score);
		$(".score").text(score);

			if(score == target){
				win();
			}
			else if(score > target){
				lose();
			}
	});

	reset();
	

})