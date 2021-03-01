function outer(){
  var a= 10;
  var b = {
      type:"Fiat", 
      model:"500", 
      color:"white"
            };
    function inner(a,b) {
     a=90;
     b= { type :"Fiat", 
     model:"500", 
     color:"white"};

     console.log(a);
     console.log(b);
    }
  
    inner(a,b);
  }
  
  outer();


  let teacher = {
	name: 'Assaf',
	sayName: function() {
		console.log(this.name);
	}
}
teacher.sayName(); //'Assaf'



function sayName() {
	console.log(this.name);
}

let teacher1 = {
	name: 'Assaf',
	speak: sayName
}

let teacher2 = {
	name: 'Shane',
	speak: sayName
}

teacher1.speak(); // 'Assaf'
teacher2.speak(); // 'Shane'



var hands =[ 'rock', 'paper','scissors'];

function getComputerHand()
 {
    return hands[parseInt(Math.random()*10) % 3] ;
}

function compare(ch1,ch2)
{
    if (ch1==ch2)
     {
        return("tie ")
    }
    
    if( ch1=="rock")
    {
        if (ch2=='paper')
        {
            return("ch2 won");
        }
        else
        {
            return("ch1 won");
            
        }
        
    }

    if( ch1=="paper")
    {
        if (ch2=='scissors')
        {
            return("ch2 won");
        }
        else
        {
            return("ch1 won");
            
        }

    }



    if( ch1=="scissors")
    {
        if (ch2=='rock')
        {
            return("ch2 won");
        }
        else
        {
            return("ch1 won");
            
        }
    }

}

var choice1= getComputerHand();

var choice2= hands[0];

var result=compare(choice1,choice2);
console.log(result);

