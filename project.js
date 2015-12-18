var garden
var title
var start

var frame
var mixed
var paper
var landfill

var coke
var cokeF
var envelope
var envelopeF
var envelopeBG
var news
var newsF
var water
var waterF
var egg
var eggF
var cereal
var cerealF

var ending

var cokeClicked=false;
var envelopeClicked=false;
var newsClicked=false;
var waterClicked=false;
var eggClicked=false;
var cerealClicked=false;

var cokeHidden=false;
var envelopeHidden=false;
var newsHidden=false;
var waterHidden=false;
var eggHidden=false;
var cerealHidden=false;

var OK;
var again;
var clouda;
var cloudb;
var cloudc;

var starA;
var starB;
var starC;

var line;



function setup(){
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);

	//background
	garden = createImg('assets/background2.png');
	garden.position(0,0);
	garden.style("width", "1280px");
	garden.style("height", "720px");

	clouda = createImg("assets/clouda.png");
	cloudb = createImg("assets/cloudb.png");
	cloudc = createImg("assets/cloudc.png");

	//tittle
	title = createImg('assets/Title.png');
	title.position(0,0);
	title.style("width", "1280px");
	title.style("height", "720px");
	
	start = createButton("START");
	start.position(620, 500);
	start.mouseOver(hover);
	start.mouseOut(nohover);
	start.mousePressed(pressed);

	frame = createImg('assets/frame.png');
	frame.hide();
	cokeF = createImg('assets/cokef.png');
	cokeF.hide();
	envelopeF = createImg('assets/envelopef.png');
	envelopeF.hide();
	newsF = createImg('assets/newsf.png');
	newsF.hide();
	waterF = createImg('assets/waterf.png');
	waterF.hide();
	eggF = createImg('assets/eggf.png');
	eggF.hide();
	cerealF = createImg('assets/cerealf.png');
	cerealF.hide();

	cokeBG = createImg('assets/cokeC.png');
	cokeBG.hide();
	envelopeBG = createImg('assets/envelopeC.png');
	envelopeBG.hide();
	newsBG = createImg('assets/newsC.png');
	newsBG.hide();
	waterBG = createImg('assets/waterC.png');
	waterBG.hide();
	eggBG = createImg('assets/eggC.png');
	eggBG.hide();
	cerealBG = createImg('assets/cerealC.png');
	cerealBG.hide();

	OK = createButton("OK")
	OK.hide();

	again = createButton("PLAY AGAIN");
	again.hide();

	ending=createImg('assets/ending.png');
	ending.hide();

	starA=createImg("assets/star.png");
	starA.hide();
	starA.position(457.051,305.199);
	starA.style("width", "78.84px");
	starA.style("height", "56.94px");

	starB=createImg("assets/star.png");
	starB.hide();
	starB.position(639.938,305.199);
	starB.style("width", "78.84px");
	starB.style("height", "56.94px");
	
	starC=createImg("assets/star.png");
	starC.hide();
	starC.position(820.956,305.199);
	starC.style("width", "78.84px");
	starC.style("height", "56.94px");

	line=createImg("assets/noFinish.png");
	line.position(279.005, 190.064);
	line.style("width","720.655 px");
	line.style("height","51.75px");
	line.hide();

	coke = createImg('assets/coke.png');
	coke.hide();

	envelope = createImg('assets/envelope.png');
	envelope.hide();

	news = createImg('assets/newspaper.png');
	news.hide();

	water = createImg('assets/water.png');
	water.hide();

	egg = createImg('assets/egg.png');
	egg.hide();

	cereal = createImg('assets/cereal.png');
	cereal.hide();
	
}

//cloud moving
var x=0;
var y=0;
var z=840.376;
var speedx=0.1;
var speedy=0.15;
var speedz=0.1;
var directionx="right";
var directiony="right";
var directionz="right";

function draw(){


	 if (directionx == "left"){
			x-=speedx;
		} else if (directionx == "right"){
			x+=speedx;
		}

		if(x < 81.262){
			x = 81.262;
			directionx="right";
		} else if(x > 100){
			x = 100;
			directionx="left";
		}
	
	clouda.style("width","415.994px");
	clouda.style("height", "142.242px");
	clear();
	clouda.position(x, 61.909);

	if (directiony == "left"){
			y-=speedy;
		} else if (directiony == "right"){
			y+=speedy;
		}

	if(y < 557.321){
			y = 557.321;
			directiony="right";
		} else if(y > 580){
			y = 580;
			directiony="left";
		}
	cloudb.style("width", "165.358px");
	cloudb.style("height", "107.865px");
	cloudb.position(y, 191.053);

	if (directionz == "right"){
			z-=speedz;
		} else if (directionz == "left"){
			z+=speedz;
		}

	if(z < 820){
			z = 820;
			directionz="left";
		} else if(z > 840.376){
			z = 840.376;
			directionz="right";
		}
	cloudc.style("width", "393.98px");
	cloudc.style("height", "129.795px");
	cloudc.position(z, 115.952);
	
	
}

function hover(){

  start.style("background-color","#BEE5E5");

}

function nohover(){

  start.style("background-color", "#FFB600");

}

function pressed(){
  
  cokeHidden=false;
  envelopeHidden=false;
  newsHidden=false;
  waterHidden=false;
  eggHidden=false;
  cerealHidden=false;
  
  start.hide();
  title.hide();
  again.hide();
  ending.hide();

  
  frame.position(0, 0);
  frame.show();
  frame.style("width", "1280px");
  frame.style("height", "720px");
  frame.mouseClicked(frameC);
  
  mixed = createImg('assets/bluebin.png');
  mixed.position(400.654, 351.946);
  mixed.style("width", "114.685px");
  mixed.style("height", "216.362px");
  mixed.mouseClicked(mixedC);

  paper = createImg('assets/greenbin.png');
  paper.position(583.211, 351.946);
  paper.style("width", "114.685px");
  paper.style("height", "216.362px");
  paper.mouseClicked(paperC);

  landfill = createImg('assets/landfill.png');
  landfill.position(766.875, 358.318);
  landfill.style("width", "112.471px");
  landfill.style("height", "210.433px");
  landfill.mouseClicked(landfillC);

  coke.show();
  coke.position(312.434, 598.809);
  coke.style("width", "42.297px");
  coke.style("height", "80.07px");
  coke.mouseOver(cokeHover);
  coke.mouseOut(cokeNo);
  coke.mouseClicked(cokeC);

  envelope.show();
  envelope.position(395.039, 616.262);
  envelope.style("width", "92.963px");
  envelope.style("height", "45.462px");
  envelope.mouseOver(envelopeHover);
  envelope.mouseOut(envelopeNo);
  envelope.mouseClicked(envelopeC);

  news.show();
  news.position(523.688, 601.132);
  news.style("width", "93.525px");
  news.style("height", "73.008px");
  news.mouseOver(newsHover);
  news.mouseOut(newsNo);
  news.mouseClicked(newsC);

  water.show();
  water.position(655.876, 591.817);
  water.style("width", "27.688px");
  water.style("height", "88.188px");
  water.mouseOver(waterHover);
  water.mouseOut(waterNo);
  water.mouseClicked(waterC);

  egg.show();
  egg.position(715.852, 611.243);
  egg.style("width", "104.691px");
  egg.style("height", "49.19px");
  egg.mouseOver(eggHover);
  egg.mouseOut(eggNo);
  egg.mouseClicked(eggC);

  cereal.show();
  cereal.position(856.072, 590.581);
  cereal.style("width", "71.302px");
  cereal.style("height", "88.142px");
  cereal.mouseOver(cerealHover);
  cereal.mouseOut(cerealNo);
  cereal.mouseClicked(cerealC);

  cokeClicked=false;
  envelopeClicked=false;
  newsClicked=false;
  waterClicked=false;
  eggClicked=false;
  cerealClicked=false;

  OK.show();
  OK.position(1100, 630);
  OK.mouseOver(okHover);
  OK.mouseOut(okNohover);
  OK.mousePressed(okPressed);


}

function okHover(){

  OK.style("background-color","#BEE5E5");

}

function okNohover(){

  OK.style("background-color", "#FFB600");

}



function lineOut(){
	line.hide();
}

function Ahover(){

  again.style("background-color","#BEE5E5");

}

function Anohover(){

  again.style("background-color", "#FFB600");

}


function cokeHover(){
	cokeF.show();
	cokeF.position(304.36, 595.532);
	cokeF.style("width", "58.446px");
	cokeF.style("height", "86.624px");

}

function cokeNo(){
	cokeF.hide();
}

function cokeC(){
	cokeClicked=true;
	cokeBG.show();
	cokeBG.position(304.36,595.532);
	cokeBG.style("width", "58.446px");
	cokeBG.style("height", "86.624px");
	envelopeClicked=false;
	newsClicked=false;
	waterClicked=false;
	eggClicked=false;
	cerealClicked=false;
	envelopeBG.hide();
	newsBG.hide();
	waterBG.hide();
	eggBG.hide();
	cerealBG.hide();
}

function envelopeHover(){
	envelopeF.show();
	envelopeF.position(387.254, 609.674);
	envelopeF.style("width", "108.533px");
	envelopeF.style("height", "58.637px");
}

function envelopeNo(){
	envelopeF.hide();
}

function envelopeC(){
	envelopeClicked=true;
	envelopeBG.show();
	envelopeBG.position(387.254,609.674);
	envelopeBG.style("width", "108.533px");
	envelopeBG.style("height", "58.637px");
	cokeClicked=false;
	newsClicked=false;
	waterClicked=false;
	eggClicked=false;
	cerealClicked=false;
	cokeBG.hide();
	newsBG.hide();
	waterBG.hide();
	eggBG.hide();
	cerealBG.hide();
}

function newsHover(){
	newsF.show();
	newsF.position(516.184, 596.908);
	newsF.style("width", "108.533px");
	newsF.style("height", "81.455px");
}

function newsNo(){
	newsF.hide();
}

function newsC(){
	newsClicked=true;
	newsBG.show();
	newsBG.position(516.184,596.908);
	newsBG.style("width", "108.533px");
	newsBG.style("height", "81.455px");
	envelopeClicked=false;
	cokeClicked=false;
	waterClicked=false;
	eggClicked=false;
	cerealClicked=false;
	cokeBG.hide();
	envelopeBG.hide();
	waterBG.hide();
	eggBG.hide();
	cerealBG.hide();
}

function waterHover(){
	waterF.show();
	waterF.position(642.942, 588.966);
	waterF.style("width", "53.555px");
	waterF.style("height", "93.89px");
}

function waterNo(){
	waterF.hide();
}

function waterC(){
	waterClicked=true;
	waterBG.show();
	waterBG.position(642.942,588.966);
	waterBG.style("width", "53.555px");
	waterBG.style("height", "93.89px");
	cokeClicked=false;
	newsClicked=false;
	envelopeClicked=false;
	eggClicked=false;
	cerealClicked=false;
	cokeBG.hide();
	envelopeBG.hide();
	newsBG.hide();
	eggBG.hide();
	cerealBG.hide();
}

function eggHover(){
	eggF.show();
	eggF.position(712.253, 602.957);
	eggF.style("width", "111.89px");
	eggF.style("height", "65,762px");
}

function eggNo(){
	eggF.hide();
}

function eggC(){
	eggClicked=true;
	eggBG.show();
	eggBG.position(712.253,602.957);
	eggBG.style("width", "111.89px");
	eggBG.style("height", "65.762px");
	cokeClicked=false;
	newsClicked=false;
	waterClicked=false;
	envelopeClicked=false;
	cerealClicked=false;
	cokeBG.hide();
	envelopeBG.hide();
	newsBG.hide();
	waterBG.hide();
	cerealBG.hide();
}

function cerealHover(){
	cerealF.show();
	cerealF.position(849.986, 587.707);
	cerealF.style("width", "83.474px");
	cerealF.style("height", "93.89px");	
}


function cerealNo(){
	cerealF.hide();
}

function cerealC(){
	cerealClicked=true;
	cerealBG.show();
	cerealBG.position(849.986,587.707);
	cerealBG.style("width", "83.474px");
	cerealBG.style("height", "93.89px");
	cokeClicked=false;
	newsClicked=false;
	waterClicked=false;
	eggClicked=false;
	envelopeClicked=false;
	cokeBG.hide();
	envelopeBG.hide();
	newsBG.hide();
	waterBG.hide();
	eggBG.hide();
}

function frameC(){
	cokeBG.hide();
	envelopeBG.hide();
	newsBG.hide();
	waterBG.hide();
	eggBG.hide();
	cerealBG.hide();
}

function mixedC(){
	if(cokeClicked==true){
		cokeBG.hide();
		coke.hide();
		cokeHidden=true;
		starA.show();
		setTimeout(hideStarA, 1000);
	}
	if(waterClicked==true){
		waterBG.hide();
		water.hide();
		waterHidden=true;
		starA.show();
		setTimeout(hideStarA, 1000);
	}

	envelopeBG.hide();
	newsBG.hide();
	eggBG.hide();
	cerealBG.hide();


}


function paperC(){
	
	if (envelopeClicked==true){
		envelopeBG.hide();
		envelope.hide();
		envelopeHidden=true;
		starB.show();
		setTimeout(hideStarB, 1000);

	}
	if(newsClicked==true){
		newsBG.hide();
		news.hide();
		newsHidden=true;
		starB.show();
		setTimeout(hideStarB, 1000);
	}
	if(cerealClicked==true){
		cerealBG.hide();
		cereal.hide();
		cerealHidden=true;
		starB.show();
		setTimeout(hideStarB, 1000);
	}

	cokeBG.hide();
	waterBG.hide();
	eggBG.hide();

}

function landfillC(){
	if(eggClicked==true){
		eggBG.hide();
		egg.hide();
		eggHidden=true;
		starC.show();
		setTimeout(hideStarC, 1000);
	}

	cokeBG.hide();
	envelopeBG.hide();
	newsBG.hide();
	waterBG.hide();
	cerealBG.hide();

}

function hideStarA(){
	starA.hide();
}

function hideStarB(){
	starB.hide();
}

function hideStarC(){
	starC.hide();
}


function okPressed(){

	if (cokeHidden==true){
	  	if( envelopeHidden==true){
	  		if(newsHidden==true){
	  			if(waterHidden==true){
	  				if(eggHidden==true){
	  					if(cerealHidden==true){
	  	ending.show();
	  	ending.position(182.139, 145.859);
	  	ending.style("width", "915.723px");
	  	ending.style("height", "107.813px");
	  	mixed.hide();
	  	paper.hide();
	  	landfill.hide();
	  	frame.hide();
	  	OK.hide();

	  	again.show();
		again.position(580, 500);
		again.mouseOver(Ahover);
		again.mouseOut(Anohover);
		again.mousePressed(pressed);


}}}}}}else{
	line.show();
		setTimeout(lineOut, 1000);
}

}