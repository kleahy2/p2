use strict;

//P2, 2A

//Function named isArmstrong that accepts a 1-5 digit number and returns true if it is an Armstrong number, false otherwise.

var isArmstrong = function(n){
	var sum = 0
	n = String(n);
	for (var i = 0; i < n.length; ++i)
		sum = sum + Math.pow(n[i], n.length)
	if (n == sum)
		return true;
	else
		return false;
}

//P2, 2B

//Function named allArmstrongs that test all numbers 1 - 99999 and returns Armstrong numbers separated by spaces

var allArmstrongs = function(){
	var result = "";
	for (var n = 1; n <=99999; ++n){
		if (isArmstrong(n)) {result = result + n + ", ";
	}
	}

	return result;

}


//P2, 2C

//Function named allSubstrings1 that accepts a string (s) and returns a string representing all substrings of s, comma separated

function allSubstrings1 (s) {
   var substrs = [];
   for (var i = 0; i < s.length; i++) {
     for (var j = i + 1; j <= s.length; j++) {
        substrs.push(s.substring(i, j));
     }
   }
   return substrs.join(',');
}


//P2, 2D

//Function named allSubstrings2 that returns an array of substings using the Array push method

function allSubstrings2(str){  
  var substr = [];  
  for (var x = 0; x < str.length; x++)   
  {  
    for (var y = x + 1; y <= str.length; y++)   
    {  
      substr.push(str.substring(x,y));  
    }  
  }  
 return substr;  
}  



//P2, 2E

//Function named maxWord that accepts a string (s) and returns the longest word in the string


function maxWord(s) {
    var str = s.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}




