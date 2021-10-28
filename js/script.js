var r1c1 = document.getElementById('r1c1');
var r1c2 = document.getElementById('r1c2');
var r1c3 = document.getElementById('r1c3');
var r2c1 = document.getElementById('r2c1');
var r2c2 = document.getElementById('r2c2');
var r2c3 = document.getElementById('r2c3');
var r3c1 = document.getElementById('r3c1');
var r3c2 = document.getElementById('r3c2');
var r3c3 = document.getElementById('r3c3');

var red = '<img src="img/red.png" alt="red"/>';
var blue = '<img src="img/blue.png" alt="blue"/>';

var turn = 1;
var turnbanner = document.getElementById('turn');
var changeturn = 1;

var x1=1;
var x2=1;
var x3=1;
var x4=1;
var x5=1;
var x6=1;
var x7=1;
var x8=1;
var x9=1;

var cc1r1 = 0;
var cc2r1 = 0;
var cc3r1 = 0;
var cc1r2 = 0;
var cc2r2 = 0;
var cc3r2 = 0;
var cc1r3 = 0;
var cc2r3 = 0;
var cc3r3 = 0;

r1c1.addEventListener('click', mark1);
r1c2.addEventListener('click', mark2);
r1c3.addEventListener('click', mark3);
r2c1.addEventListener('click', mark4);
r2c2.addEventListener('click', mark5);
r2c3.addEventListener('click', mark6);
r3c1.addEventListener('click', mark7);
r3c2.addEventListener('click', mark8);
r3c3.addEventListener('click', mark9);

document.getElementById('reload').addEventListener('click', function(){
	location.reload();
})

document.getElementById('turn').addEventListener('click', function(){
	if(changeturn==1){
		turn=2;
		document.getElementById('turn').innerHTML = '<h1>Turn:</h1>'+'<img src="img/blue.png" alt="blue"/>';
		changeturn=2;
	}
});

function mark1(){

	if (x1==1){
		if(turn==1){
		r1c1.innerHTML = red;
		turn = 2;
		cc1r1 = 1;
	}
	else if(turn==2){
		r1c1.innerHTML = blue;
		turn = 1;
		cc1r1 = 2;
	}
	x1++;}
	
	checkt();
	check();
}
function mark2(){

	if (x2==1){
		if(turn==1){
		r1c2.innerHTML = red;
		turn = 2;
		cc2r1 = 1;
	}
	else if(turn==2){
		r1c2.innerHTML = blue;
		turn = 1;
		cc2r1 = 2;
	}
	x2++;}
	
	checkt();
	check();
}
function mark3(){

	if (x3==1){
		if(turn==1){
		r1c3.innerHTML = red;
		turn = 2;
		cc3r1 = 1;
	}
	else if(turn==2){
		r1c3.innerHTML = blue;
		turn = 1;
		cc3r1 = 2;
	}
	x3++;}
	
	checkt();
	check();
}
function mark4(){

	if (x4==1){
		if(turn==1){
		r2c1.innerHTML = red;
		turn = 2;
		cc1r2 = 1;
	}
	else if(turn==2){
		r2c1.innerHTML = blue;
		turn = 1;
		cc1r2 = 2;
	}
	x4++;}
	
	checkt();
	check();
}
function mark5(){

	if (x5==1){
		if(turn==1){
		r2c2.innerHTML = red;
		turn = 2;
		cc2r2 = 1;
	}
	else if(turn==2){
		r2c2.innerHTML = blue;
		turn = 1;
		cc2r2 = 2;
	}
	x5++;}
	
	checkt();
	check();
}
function mark6(){

	if (x6==1){
		if(turn==1){
		r2c3.innerHTML = red;
		turn = 2;
		cc3r2 = 1;
	}
	else if(turn==2){
		r2c3.innerHTML = blue;
		turn = 1;
		cc3r2 = 2;
	}
	x6++;}
	
	checkt();
	check();
}
function mark7(){

	if (x7==1){
		if(turn==1){
		r3c1.innerHTML = red;
		turn = 2;
		cc1r3 = 1;
	}
	else if(turn==2){
		r3c1.innerHTML = blue;
		turn = 1;
		cc1r3 = 2;
	}
	x7++;}
	
	checkt();
	check();
}
function mark8(){

	if (x8==1){
		if(turn==1){
		r3c2.innerHTML = red;
		turn = 2;
		cc2r3 = 1;
	}
	else if(turn==2){
		r3c2.innerHTML = blue;
		turn = 1;
		cc2r3 = 2;
	}
	x8++;}
	
	checkt();
	check();
}
function mark9(){

	if (x9==1){
		if(turn==1){
		r3c3.innerHTML = red;
		turn = 2;
		cc3r3 = 1;
	}
	else if(turn==2){
		r3c3.innerHTML = blue;
		turn = 1;
		cc3r3 = 2;
	}
	x9++;}
	
	checkt();
	check();
}

function check(){
	/*Col win*/
	if((cc1r1==1)&&(cc2r1==1)&&(cc3r1==1)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/red.png" alt="red"/>';turn = 3;alert('Game ended');}
	else if((cc1r1==2)&&(cc2r1==2)&&(cc3r1==2)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/blue.png" alt="blue"/>';turn = 3;alert('Game ended');}
	else if((cc1r2==1)&&(cc2r2==1)&&(cc3r2==1)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/red.png" alt="red"/>';turn = 3;alert('Game ended');}
	else if((cc1r2==2)&&(cc2r2==2)&&(cc3r2==2)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/blue.png" alt="blue"/>';turn = 3;alert('Game ended');}
	else if((cc1r3==1)&&(cc2r3==1)&&(cc3r3==1)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/red.png" alt="red"/>';turn = 3;alert('Game ended');}
	else if((cc1r3==2)&&(cc2r3==2)&&(cc3r3==2)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/blue.png" alt="blue"/>';turn = 3;alert('Game ended');}
	/*Row win*/
	else if((cc1r1==1)&&(cc1r2==1)&&(cc1r3==1)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/red.png" alt="red"/>';turn = 3;alert('Game ended');}
	else if((cc1r1==2)&&(cc1r2==2)&&(cc1r3==2)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/blue.png" alt="blue"/>';turn = 3;alert('Game ended');}
	else if((cc2r1==1)&&(cc2r2==1)&&(cc2r3==1)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/red.png" alt="red"/>';turn = 3;alert('Game ended');}
	else if((cc2r1==2)&&(cc2r2==2)&&(cc2r3==2)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/blue.png" alt="blue"/>';turn = 3;alert('Game ended');}
	else if((cc3r1==1)&&(cc3r2==1)&&(cc3r3==1)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/red.png" alt="red"/>';turn = 3;alert('Game ended');}
	else if((cc3r1==2)&&(cc3r2==2)&&(cc3r3==2)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/blue.png" alt="blue"/>';turn = 3;alert('Game ended');}
	/*Diagonal win*/
	else if((cc1r1==1)&&(cc2r2==1)&&(cc3r3==1)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/red.png" alt="red"/>';turn = 3;alert('Game ended');}
	else if((cc1r1==2)&&(cc2r2==2)&&(cc3r3==2)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/blue.png" alt="blue"/>';turn = 3;alert('Game ended');}
	else if((cc3r1==1)&&(cc2r2==1)&&(cc1r3==1)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/red.png" alt="red"/>';turn = 3;alert('Game ended');}
	else if((cc3r1==2)&&(cc2r2==2)&&(cc1r3==2)){winner.innerHTML = '<h1>Winner:</h1>'+'<img src="img/blue.png" alt="blue"/>';turn = 3;alert('Game ended');}
}
function checkt(){
	if(turn==1){
	turnbanner.innerHTML = '<h1>Turn:</h1>'+'<img src="img/red.png" alt="red"/>';
	changeturn=2;
}
else if (turn==2){
	turnbanner.innerHTML = '<h1>Turn:</h1>'+'<img src="img/blue.png" alt="blue"/>';
	changeturn=2;
}}