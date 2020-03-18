//getElementById method used id=catslove to find the element
var myElement = document.getElementById('catslove');
myElement.innerHTML ="World of cats!";

//getElementByClassName method used id = catshate to find the element
var x = document.getElementsByClassName('cats');
document.getElementById('catshate').innerHTML ="The second paragraph explains: " + x[1].innerHTML; 
 
//getElementByTagName method used id = catshate to find the element
var y = document.getElementsByTagName('ol');
document.getElementById('catshate').innerHTML = "These are the thing cats hate: " + y[0].innerHTML;