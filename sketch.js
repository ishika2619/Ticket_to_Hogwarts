var harry , h1,h2;
var bg1 , BG ;
var donut, donut1 , key1 , kid1 ;
var aunt1Img , aunt2Img ;
var uncle1Img , uncle2Img ;
var letterImg1 , letterImg2 , letterImg , letter ;
var light ,color , keys ;
var lastletters , lletter , lastletter ;
var gameState = "start"  ;




function preload(){
// harry
h1 = loadImage("png/harry.png");
h2 = loadImage("png/harry2.png");
//intro
bg1 = loadAnimation("png/introRR.png");

// level1 

// power
donut1 = loadImage("png/donut1.png"); 
key1 = loadImage("png/key1.png");
// obstacles 
kid1 = loadImage("png/kidR.png");
aunt1Img = loadImage("png/auntR.png");
aunt2Img = loadImage("png/aunt2.png");
uncle1Img =loadImage("png/uncle1R.png");
uncle2Img = loadImage("png/uncle2R.png");
// letter 
letterImg1 = loadImage("png/letter3.png");
letterImg2 = loadImage("png/letter2.png");
letterImg = loadImage("png/l1.png");
//gem
gemImg = loadImage("png/diamond.png");
gem2Img = loadImage("png/diamond2.png");
gem3Img = loadImage("png/ob1.png");
gem4Img = loadImage("png/ob2.png");
gem5Img = loadImage("png/ob3.png");
// reset 
resetImg = loadImage("png/reset.png");
// last letter
lastletter = loadImage("png/finishR.png");

}


function setup(){
  createCanvas (1350,600);


  BG = createSprite(675,300,10,10)
  BG.addAnimation("intro" , bg1);
  BG.scale = 0.7;
  
  
  color = createSprite(650,250,1300,500);
  color.shapeColor = "black";

  light = createSprite(30,30,80,80);
  light.shapeColor = "white";
  
  donut = createSprite(1270,35,10,10);
  donut.addImage(donut1);
  donut.scale = 0.2;

  gem = createSprite(1270,465,10,10);
  gem.addImage(gemImg);
  gem.scale = 0.11;

  reset = createSprite(600,525,10,10);
  reset.addImage(resetImg);
  reset.scale = 0.3;

  uncle = createSprite(1200,140,10,10);
  uncle.addImage(uncle2Img);
  uncle.scale = 0.3;
  uncle2 = createSprite(10000,140,10,10); 
  uncle2.addImage(uncle1Img);
  uncle2.scale = 0.3;    
 
  keys = createSprite(10000,10000,10,10);
  keys.shapeColor = "white";
  
  
  redwall = createSprite(900,145,3,150);
  redwall.shapeColor = "red";

  white = createSprite(1035,140,70,3);
  white.visible = false ;

  


  

  //35,35
  harry = createSprite(35,35,10,10);
  harry.addImage(h1);
  harry.scale= 0.18;

  // 1 boundary wall
  wall1 = createSprite(650,1,1300,3);
  wall2 = createSprite(1,250,3,500);
  wall3 = createSprite(650,499,1300,3);
  wall4 = createSprite(1299,250,3,500);
  // left side box walls
  wall5 = createSprite(115,70,230,3);
  wall6 = createSprite(230,105,3,70);

  // first row box walls
  wall7 = createSprite(400,70,200,3);
  wall8 = createSprite(300,35,3,70);
  wall9 = createSprite(500,35,3,70);

  wall10 = createSprite(785,70,430,3);
  wall11 = createSprite(1185,70,230,3);

  wall12 = createSprite(285,140,570,3);
  wall13 = createSprite(570,105,3,70);
  
  // 3 row big line
  wall14 = createSprite(685,220,1230,3);

  //4 row walls first box
  wall15 = createSprite(200,290,400,3);
  wall16 = createSprite(200,360,400,3);
  wall17 = createSprite(400,325,3,70);

  // 2nd box 4 row
  wall18 = createSprite(585,290,230,3); 
  wall19 = createSprite(470,360,3,140);
  wall20 = createSprite(700,360,3,140);

 // 3rd box 4 row
  wall21 = createSprite(835,290,130,3);
  wall22 = createSprite(770,360,3,140);
  wall23 = createSprite(900,325,3,210);
  wall24 = createSprite(835,430,130,3);

  // big line 6 row
  wall25 = createSprite(350,430,700,3);

  wall26 = createSprite(970,360,3,140);
  wall27 = createSprite(1135,430,330,3);

  // door
  door = createSprite(935,430,70,3);
  door.shapeColor = "brown";

  //obstacles
  ob1 = createSprite(870,255,10,10);
  ob2 = createSprite(35,395,10,10);
  ob3 = createSprite(30,465,10,10);
  ob2.shapeColor = "black";
  ob3.shapeColor = "black";
  ob1.shapeColor = "black";
  // blue diamond ob3
  gem2 = createSprite(30,465,10,10);
  gem2.addImage(gem2Img);
  gem2.scale = 0.2;
  // pot ob2
  gem3 = createSprite(35,395,10,10);
  gem3.addImage(gem3Img);
  gem3.scale = 0.15;
  // hat ob1
  gem4 = createSprite(870,255,10,10);
  gem4.addImage(gem4Img);
  gem4.scale = 0.2;
  // no use just distraction 
  gem5 = createSprite(35,325,10,10);
  gem5.addImage(gem5Img);
  gem5.scale =0.7;
  

  letter = createSprite(1200,255,10,10);
  letter.addImage(letterImg);
  letter.scale = 0.3;
  letter.velocityY = 4;
  //letter.depth = 20 ;


  wall2.shapeColor = "black";
  wall1.shapeColor = "black";
  wall3.shapeColor = "black";
  wall4.shapeColor = "black";
  wall5.shapeColor = "black";
  wall6.shapeColor = "black";
  wall7.shapeColor = "black";
  wall8.shapeColor = "black";
  wall9.shapeColor = "black";
  wall10.shapeColor = "black";
  wall11.shapeColor = "black";
  wall12.shapeColor = "black";
  wall13.shapeColor = "black";
  wall14.shapeColor = "black";
  wall15.shapeColor = "black";
  wall16.shapeColor = "black";
  wall17.shapeColor = "black";
  wall18.shapeColor = "black";
  wall19.shapeColor = "black";
  wall20.shapeColor = "black";
  wall21.shapeColor = "black";
  wall22.shapeColor = "black";
  wall23.shapeColor = "black";
  wall24.shapeColor = "black";
  wall25.shapeColor = "black";
  wall26.shapeColor = "black";
  wall27.shapeColor = "black"; 
 

}

function draw (){
  background("white");
  console.log(letter.y);
// start.............................................................
 if (gameState === "start"){
  
  color.visible = false;
  harry.visible = false;
  door.visible = false;
  donut.visible = false;
  ob1.visible = false;
  ob2.visible = false;
  ob3.visible = false;
  uncle.visible = false;
  uncle2.visible = false;
  reset.visible = false;
  redwall.visible = false;
  gem.visible = false;
  gem2.visible = false;
  gem3.visible = false;
  gem4.visible = false;
  letter.visible = false;
  gem5.visible = false;
  
  


  

  wall1.visible = false; 
  wall2.visible = false;
  wall3.visible = false; 
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  wall10.visible = false;
  wall11.visible = false;
  wall12.visible = false;
  wall13.visible = false;
  wall14.visible = false;
  wall15.visible = false;
  wall16.visible = false;
  wall17.visible = false;
  wall18.visible = false;
  wall19.visible = false;
  wall20.visible = false;
  wall21.visible = false;
  wall22.visible = false;
  wall23.visible = false;
  wall24.visible = false;
  wall25.visible = false;
  wall26.visible = false;
  wall27.visible = false;


 


            BG.changeAnimation("intro" , bg1);
           if (keyDown("space")){
      BG.x = 3000
      
      gameState = "level1"; }
} 



    // level 1 ...................................................
        if ( gameState === "level1"){ 
        letter.bounceOff(wall14);
        letter.bounceOff(wall27);
       // letter.velocityY = 4;
       BG.x = 3000;
      
   

      if (harry.isTouching(ob1)){
        ob1.addImage(aunt1Img);
        ob1.scale = 0.12;
        gem4.x = 10000;
        harry.x = 35;
        harry.y = 35;
        

      };if (harry.isTouching(ob2)){
        ob2.addImage(kid1);
        ob2.scale = 0.15;
        gem3.x = 10000;
        harry.x = 35;
        harry.y = 35;
        
      }if (harry.isTouching(ob3)){    
        ob3.addImage(aunt2Img);
        ob3.scale = 0.45;
        gem2.x = 10000;
        harry.x = 35;
        harry.y = 35;
        
      };

     

      if (harry.isTouching(donut)){
        
        uncle2.x = 1200;
        uncle.x = 100000;
        keys.addImage(key1);
        keys.scale = 0.15;
        keys.x = 640;
        keys.y = 105;
        redwall.x = 1000000;
        white.x = 10000000;
     }

     if (uncle.visible === true){
       if ( harry.isTouching(white)){
         harry.x = 35;
         harry.y = 35;
       
       }
     }
  
      if (harry.isTouching(keys)){
        door.x = 100000;
      }

      if (harry.isTouching(redwall)){
        harry.x = 35 ;
        harry.y = 35 ;
        
      }
      if ( harry.isTouching(door)){
        harry.x = 35;
        harry.y = 35;
     
      }
      if ( harry.isTouching(gem)){
        color.x = 1000000;
        gem.x = 1000000000;
      }
      if (mousePressedOver(reset)){
        harry.x = 35;
        harry.y = 35;
      }

      if(harry.isTouching(letter)){
        gameState = "finish"
      }

// reset
      if (harry.x === 35 && harry.y === 35){
        keys.x = 10000;
        keys.y = 10000;
        color.x = 650 ;
        gem.x = 1270;
        door.x = 936;
        white.x = 1035;
        redwall.x = 900;
        uncle.x = 1200;
        uncle2.x = 1000000;
     }
   
    

     


        if(keyDown("right")){
         harry.x = harry.x+3;
       }
       if(keyDown("left")){
        harry.x = harry.x-3;
      }
      if(keyDown("up")){
        harry.y = harry.y -3 ;
      }
      if(keyDown("down")){
        harry.y = harry.y+3 ;
      }

       harry.visible = true;
       donut.visible = true;    
       door.visible = true;
       color.visible = true;
       ob1.visible = true;
       ob2.visible = true;
       ob3.visible = true;
       
       light.x= harry.x ;
       light.y = harry.y;

       wall1.visible = true; 
       wall2.visible = true;
       wall3.visible = true; 
       wall4.visible = true;
       wall5.visible = true;
       wall6.visible = true;
       wall7.visible = true;
       wall8.visible = true;
       wall9.visible = true;
       wall10.visible = true;
       wall11.visible = true;
       wall12.visible = true;
       wall13.visible = true;
       wall14.visible = true;
       wall15.visible = true;
       wall16.visible = true;
       wall17.visible = true;
       wall18.visible = true;
       wall19.visible = true;
       wall20.visible = true;
       wall21.visible = true;
       wall22.visible = true;
       wall23.visible = true;
       wall24.visible = true;
       wall25.visible = true;
       wall26.visible = true;
       wall27.visible = true;
       uncle.visible = true;
  uncle2.visible = true;
  reset.visible = true;
  redwall.visible = true;
  gem.visible = true;
  gem2.visible = true;
  gem3.visible = true;
  gem4.visible = true;
  letter.visible = true;
  gem5.visible = true;
  //letter.velocityY = 4;
 

       harry.bounceOff(wall1);
       harry.bounceOff(wall2);
       harry.bounceOff(wall3);
       harry.bounceOff(wall4);
       harry.bounceOff(wall5);
       harry.bounceOff(wall6);
       harry.bounceOff(wall7);
       harry.bounceOff(wall8);
       harry.bounceOff(wall9);
       harry.bounceOff(wall10);
       harry.bounceOff(wall11);
       harry.bounceOff(wall12);
       harry.bounceOff(wall13);
       harry.bounceOff(wall14);
       harry.bounceOff(wall15);
       harry.bounceOff(wall16);
       harry.bounceOff(wall17);
       harry.bounceOff(wall18);
       harry.bounceOff(wall19);
       harry.bounceOff(wall20);
       harry.bounceOff(wall21);
       harry.bounceOff(wall22);
       harry.bounceOff(wall23);
       harry.bounceOff(wall24);
       harry.bounceOff(wall25);
       harry.bounceOff(wall26);
       harry.bounceOff(wall27);
     //  harry.bounceOff(door);
      
  }

  if ( gameState === "finish"){

    lastletters = createSprite(650,250,10,10);
    lastletters.addImage(lastletter);
    lastletters.scale = 0.5;


    color.visible = false;
    harry.visible = false;
    door.visible = false;
    donut.visible = false;
    ob1.visible = false;
    ob2.visible = false;
    ob3.visible = false;
    uncle.visible = false;
    uncle2.visible = false;
    reset.visible = false;
    redwall.visible = false;
    gem.visible = false;
    gem2.visible = false;
    gem3.visible = false;
    gem4.visible = false;
    letter.visible = false;
    gem5.visible = false;
    //key.visible = false;
   // key.x = 10000000;
    keys.destroy();
    
  
    wall1.visible = false; 
    wall2.visible = false;
    wall3.visible = false; 
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    wall27.visible = false;
  
  }

  //console.log(lastletters);
  drawSprites();

}