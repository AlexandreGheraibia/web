var angle=45;
var current_angle=0;
var index_menu;
var index_face;
var octogone=$('.octogone');
var lis=octogone.find("li");
var data_menu=["un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","eleven"];

function init(){
	
	index_menu=data_menu.length-1;
	index_face=octogone.length-1;
	$(lis).each((index,elem) =>{
		  if(index===0){
			  $(elem).html(data_menu[data_menu.length-1]);
		  }
		  else{
			 $(elem).html(data_menu[index-1]);
		  }
		});
		
}

function rotate(degree, max, incr) {
	
	  // For webkit browsers: e.g. Chrome
	octogone.css({ WebkitTransform: 'rotateX(' + degree + 'deg)'});
	  // For Mozilla browser: e.g. Firefox
	octogone.css({ '-moz-transform': 'rotateX(' + degree + 'deg)'});

	  // Animate rotation with a recursive call

	if(incr*(degree-max)>=0){
		degree=max;
	}
	else{
		degree+=incr;
		setTimeout(function() { rotate(degree,max,incr); },50/angle);
	}
}

function moveOctogone(incr){
	
	var tmp=current_angle;
	current_angle+=angle*incr;
	rotate(tmp,current_angle,incr);

}

function up(){
	
	index_menu=(index_menu+1)%(data_menu.length);
	$(lis[(index_face+4)%8]).html(data_menu[(index_menu+3)%data_menu.length]);
	index_face=(index_face+1)%8;
	moveOctogone(1);
	
}

function down(){
	
	index_menu=(data_menu.length+index_menu-1)%data_menu.length;
	index_face=(8+index_face-1)%8;
	$(lis[index_face]).html(data_menu[(index_menu)%data_menu.length]);
	moveOctogone(-1);
	
}

init();
	
