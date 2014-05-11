// I worked [by myself, with:] on this challenge

// Your mission description:
// 
// 
// 

//Pseudocode
//define Warrior function to be used for each player
//define parameters name, team, atackstrength, and position

//define fight function
//define distanceTOenemy
//define a movement function

// Create two Warriors
//have warriors move toward one another
//have players fight

// Initial Code
function Warrior(name, team, attackstrength,positionX,positionY){
    this.name=name;
    this.team=team;
    this.health=100;
    this.attackstrength=attackstrength;
    this.position=[positionX,positionY];
    this.fight=function(enemy){
        if(this.distToEnemy<=2){
            enemy.health-this.attackstrength;
            return enemy.health;
        }
        else{
            console.log("Get Closer");
        }
    };
    this.distToEnemy=function(enemy){
        var dist = this.position[0] - enemy.position[0];
        return dist;
    };
    this.move=function(direction){
        if (direction=="right"){
            this.position[0]+=1;
            return this.position;
        }
        else{
            this.position[0]-=1;
            return this.position;
        };
    };   
};       



var Hulk = new Warrior("Hulk","good",50,1,0);
var Superman = new Warrior ("Superman", "Bad", 50, 3, 0);





// Refactored Code

function Warrior(name, team, attackstrength,positionX,positionY){
    this.name=name;
    this.team=team;
    this.health=100;
    this.attackstrength=attackstrength;
    this.position=[positionX,positionY];
    this.fight=function(enemy){
        //tester
        console.log(this.distToEnemy(enemy));
        
        //added (enemy) to the end of each distToEnemy, since it is a function;
        
        if(this.distToEnemy(enemy)<=2){
            //changed enemy.health-this.attackstrength to the below, so it would change the health factor
            enemy.health-=this.attackstrength;
            return enemy.health;
        }
        else{
            console.log("Get Closer");
        }
    };
    this.distToEnemy=function(enemy){
        var dist = this.position[0] - enemy.position[0];
        return dist;
    };
    this.move=function(direction){
    //tester tool
        console.log(this.position[0]);
        
        if (direction=="right"){
            this.position[0]+=1;
            return this.position;
        }
        else{
            this.position[0]-=1;
            return this.position;
        };
    };   
};       



var Hulk = new Warrior("Hulk","good",50,1,0);
var Superman = new Warrior ("Superman", "Bad", 50, 3, 0);


Superman.move();
Hulk.fight(Superman);



// Reflection
// 
// THis challenge was a huge help to me.  I paired with another student who had more knowledge of javascript than me
// and he took to time to explain concepts I was having a hard time grasping and walking me through some of the code.
// Overall i drove less that my partner, but I did drive to create part of distTOEnemey and move functions. Orignally
//we were going to try and make a larger layoff and have a grid space for the fight, but getting all of those details coded
//out was not withing our time limits for a our pairing session. Getting 
// some hands on experience trying to design the code for a game was perfect practice because we are trying to build 
// something that can be used and that we imagined, rather than just defining arbitrary variables or functions.  This is the kind of coding
// that really seems to propel my learning faster than just reading through tutorials and material. after pairing I was
//stuck on trying to refactor the code because the fight function would continue to return "Move closer even if the enemy
//was less that 2 position points away.  My partner actualy figure out and refactored the distTOEnemy function and made
//the refactored changes by adding (enemy) to the end of the function withing the fight function.    It is toward the 
//end of the week and I fear that my knowledge of JS might not be where it needs to, but I will continue to work hard on
//these exercises and outside work to better my knowledge.






