var index_menu;
var index_face;
var current_angle=0;
var sideNumber=4;
var angle=360.0/sideNumber;
var radian=2*Math.PI/sideNumber;
var radius=30;
var faceSize=radius*Math.pow(Math.pow(Math.sin(radian),2)+Math.pow(1-Math.cos(radian),2),0.5);


for(i=0;i<sideNumber;i++){
	$jQ(".polygone").append('<li class="face">'+(i+1)+'</li>');
	
}

$jQ('.polygone>li').each((i,ele)=>{$jQ(ele).css({'height': faceSize+'px',
								   'line-height': faceSize+'px',
								   'transform': 'rotateX(' +i*angle + 'deg) translateZ(' + radius + 'px) ',
								  
								  });
						
					  });

$jQ('.polygone').css({'height': faceSize+'px'});

function init(){
	console.log(data_menu);
	index_menu=data_menu.length-1;
	index_face=sideNumber-1;
	console.log(index_face);
	$jQ('.polygone>li').each((index,elem) =>{
		  if(index===index_face){
			  $jQ(elem).html(data_menu[data_menu.length-1][0]);
		  }
		  else{
			 $jQ(elem).html(data_menu[index][0]);
		  }
		});
		
}
	  
function rotate(degree, max, incr) {
	
	  // For webkit browsers: e.g. Chrome
	$jQ('.polygone').css({ 'WebkitTransform': 'rotateX(' + degree + 'deg)',
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
	$jQ($jQ('.polygone>li')[(index_face)%sideNumber]).html(data_menu[(index_menu)%data_menu.length][0]);
	movePolygone(1);
}

	
function down(){
	
	var decal=sideNumber-2;
	$jQ($jQ('.polygone>li')[(index_face+decal)%sideNumber]).html(data_menu[(index_menu+decal)%data_menu.length][0]);
	index_menu=(index_menu+1)%data_menu.length;
	index_face=(index_face+1)%sideNumber;

	movePolygone(-1);
	
}

init();