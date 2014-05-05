// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
rescue mission
//move down x2
//move right
//move up x2
//move right x2
//move down x2
//Attack!

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();

grab the mushroom
//move up
//move right
//move left
//move up
//attack
//move right
//move left
//move up
//attack
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

drink me
//attack
//move right
//move down
//move up
//move right
//attack
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

taunt the gaurds
//move right
//say follow
//move right x2
//move up
//move right
//taunt gaurds--say "hey"
//move down
//move right
//move up
//move right
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("hey");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

its a trap
//movedown x2
//taunt guard-say "hey"
//move up x2
this.moveDown();
this.moveDown();
this.say("hey");
this.moveUp();
this.moveUp();

taunt
//taunt guard-say something x4
this.say("you stink")
this.say("I hate your face")
this.say("you stink")
this.say("you stink")

cowardly taunt
//move up and left x2
//taunt ogre-say"hey"
//move down and right
this.moveXY(63, 20);
this.moveXY(58, 25);
this.say("Hey");
this.moveXY(63, 20);

commanding followers
//say "follow me"
//move down and left
//say "lets fight"
this.say("follow me");
this.moveXY(67,44);
this.say("lets fight!");

mobile artillery
//move canon up and right
//fire shot up and right x2
//fire shot up and left x2
this.moveXY(50, 40);
this.attackXY(67, 54);
this.attackXY(60, 46);
this.attackXY(49, 63);
this.attackXY(51, 49);
 
 
 
 
 // Reflection:

Using code combat was a fun way to introduce Javascript. I've always wanted to program a game of
 some kind and this made me feel like myabe I can one day.  The "this" part of the code block refers to the object 
 we are controling with the method after the period.  The "()" call this method and tell it to execute on the onject 
 it is attached to.  THe semi colon at the end does just that; it ends the code block.