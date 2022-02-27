var hero, villian
var borders1, borders2, borders3, borders4
var heroImg, villianImg, heroSpecial, heroSpecial2, heroKick

function preload(){
 villianImg = loadImage("assets/villian.png")

 heroSpecial = loadAnimation("assets/special-1.png","assets/special-2.png","assets/special-3.png","assets/special-4.png","assets/special-5.png","assets/special-6.png","assets/special-7.png","assets/special-8.png","assets/special-9.png","assets/special-10.png","assets/special-11.png","assets/special-12.png","assets/special-13.png","assets/special-14.png","assets/special-15.png","assets/special-16.png","assets/special-17.png","assets/special-18.png","assets/special-19.png","assets/special-20.png")
 heroSpecial2 = loadAnimation("assets/punch-1.png","assets/punch-2.png","assets/punch-3.png","assets/punch-4.png","assets/punch-5.png","assets/punch-6.png","assets/punch-7.png","assets/punch-8.png","assets/punch-9.png","assets/punch-10.png","assets/punch-11.png","assets/punch-12.png","assets/punch-13.png","assets/punch-14.png","assets/punch-15.png","assets/punch-16.png","assets/punch-17.png","assets/punch-18.png","assets/punch-19.png","assets/punch-20.png","assets/punch-21.png","assets/punch-22.png","assets/punch-23.png","assets/punch-24.png","assets/punch-25.png","assets/punch-26.png","assets/punch-27.png","assets/punch-28.png","assets/punch-29.png","assets/punch-30.png","assets/punch-31.png","assets/punch-32.png","assets/punch-33.png","assets/punch-34.png","assets/punch-35.png","assets/punch-36.png","assets/punch-37.png","assets/punch-38.png","assets/punch-39.png")
 heroKick = loadAnimation("assets/kick-1.png","assets/kick-2.png","assets/kick-3.png","assets/kick-4.png","assets/kick-5.png","assets/kick-6.png")
}

function setup() {
  createCanvas(1300, 600);
  
  villian = createSprite(650,300,50,50)
  hero = createSprite(650,220,50,50)
  
  borders1 = createSprite()
}

function draw() {

  background(352);
  if(keyDown("UP_ARROW")||touches.length>0){
    hero.y = hero.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   hero.y = hero.y+30
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
    hero.x = hero.x+30
  }
  if(keyDown("LEFT_ARROW")||touches.length>0){
   hero.x = hero.x-30
  }
  if(keyCode===90){
    hero.addAnimation("hero1",heroSpecial)
   }
   if(keyCode===88){
    hero.addAnimation("hero1",heroSpecial2)
   }
   if(keyCode===67){
    hero.addAnimation("hero1",heroKick)
   }  

  drawSprites();
}

