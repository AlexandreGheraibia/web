var index_menu;
var index_face;
var current_angle=0;
var sideNumber=10;
var angle=360.0/sideNumber;
var radian=2*Math.PI/sideNumber;
var radius=20;
var faceSize=radius*Math.pow(Math.pow(Math.sin(radian),2)+Math.pow(1-Math.cos(radian),2),0.5);
var data_menu=["un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","eleven"];

for(i=0;i<sideNumber;i++){
	$(".polygone").append('<li class="face">'+(i+1)+'</li>');
	
}

$('.polygone>li').each((i,ele)=>{$(ele).css({'height': faceSize+'px',
								   'line-height': faceSize+'px',
								   'transform': 'rotateX(' +i*angle + 'deg) translateZ(' + radius + 'px) ',
								  
								  });
						
					  });

$('.polygone').css({'height': faceSize+'px'});

function init(){
	
	index_menu=data_menu.length-1;
	index_face=sideNumber-1;
	console.log(index_face);
	$('.polygone>li').each((index,elem) =>{
		  if(index===index_face){
			  $(elem).html(data_menu[data_menu.length-1]);
		  }
		  else{
			 $(elem).html(data_menu[index]);
		  }
		});
		
}
	  
function rotate(degree, max, incr) {
	
	  // For webkit browsers: e.g. Chrome
	$('.polygone').css({ 'WebkitTransform': 'rotateX(' + degree + 'deg)',
	  // For Mozilla browser: e.g. Firefox
					'-moz-transform': 'rotateX(' + degree + 'deg)'
	
	});

	if(incr*(degree-max)>=0){
		degree=max;
	}
	else{
		degree+=incr;
		setTimeout(function() { rotate(degree,max,incr); },1);
	}
}

function movePolygone(incr){
	
	var tmp=current_angle;
	current_angle+=angle*incr;
	rotate(tmp,current_angle,incr);

}

function up(){
	
	index_menu=(data_menu.length+index_menu-1)%data_menu.length;
	index_face=(sideNumber+index_face-1)%sideNumber;
	$($('.polygone>li')[(index_face)%sideNumber]).html(data_menu[(index_menu)%data_menu.length]);
	movePolygone(1);
}

	
function down(){
	
	var decal=sideNumber-2;
	$($('.polygone>li')[(index_face+decal)%sideNumber]).html(data_menu[(index_menu+decal)%data_menu.length]);
	index_menu=(index_menu+1)%data_menu.length;
	index_face=(index_face+1)%sideNumber;

	movePolygone(-1);
	
}

init();