var keys = [];
var code = '39,37,39,37,40,40,38,38';

function keyHandler(e)
{
	keys.length=7;
	keys.unshift(e.keyCode);
 	if(keys.toString() == code)
 	{
 		alert("it works!");
	}
}
document.onkeydown = keyHandler;
