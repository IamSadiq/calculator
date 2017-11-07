var num1 = document.getElementById("num1"), num2 = document.getElementById("num2"), num3 = document.getElementById("num3");
var num4 = document.getElementById("num4"), num5 = document.getElementById("num5"), num6 = document.getElementById("num6");
var num7 = document.getElementById("num7"), num8 = document.getElementById("num8"), num9 = document.getElementById("num9");
var num0 = document.getElementById("num0");

var numAdd = document.getElementById("numAdd"), numSubtract = document.getElementById("numSubtract");
var numMultiply = document.getElementById("numMultiply"), numDivide = document.getElementById("numDivide");
var numDot = document.getElementById("numDot"), numEqual = document.getElementById("numEqual");
var numDelete = document.getElementById("numDelete"), numReset = document.getElementById("numReset");

var numStore = "", newStore = 0, operand = "newOperand", numDisplay;
var writeTo = document.getElementById("textField"); 

num1.addEventListener('click', function(){
numDisplay = "1";
if(newStore === "")
{
	writeTo.value += numDisplay;
	numStore += numDisplay;
}
else
{
	numStore += numDisplay;
	switch(operand)
	{
		case "numAdd":
			newStore += parseFloat(numStore);
			//resetting numStore
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numSubtract":
			newStore -= parseFloat(numStore);
			//resetting numStore
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numDivide":
			newStore /= parseFloat(numStore);
			//resetting numStore
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numMultiply":
			newStore *= parseFloat(numStore);
			//resetting numStore
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		default:
			writeTo.value += numDisplay;
			break;
	}
}
});
num2.addEventListener('click', function(){
numDisplay="2";
if(newStore === "")
{
	writeTo.value += numDisplay;
	numStore += numDisplay;
}
else
{
	numStore += numDisplay;
	switch(operand)
	{
		case "numAdd":
			newStore += parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numSubtract":
			newStore -= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numDivide":
			newStore /= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numMultiply":
			newStore *= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		default:
			writeTo.value += numDisplay;
			break;
	}
}
});
num3.addEventListener('click', function(){
numDisplay="3";
if(newStore === "")
{
	writeTo.value += numDisplay;
	numStore += numDisplay;
}
else
{
	numStore += numDisplay;
	switch(operand)
	{
		case "numAdd":
			newStore += parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numSubtract":
			newStore -= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numDivide":
			newStore /= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numMultiply":
			newStore *= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		default:
			writeTo.value += numDisplay;
			break;
	}
}
});
num4.addEventListener('click', function(){
numDisplay="4";
if(newStore === "")
{
	writeTo.value += numDisplay;
	numStore += numDisplay;
}
else
{
	numStore += numDisplay;
	switch(operand)
	{
		case "numAdd":
			newStore += parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numSubtract":
			newStore -= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numDivide":
			newStore /= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numMultiply":
			newStore *= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		default:
			writeTo.value += numDisplay;
			break;
	}
}
});
num5.addEventListener('click', function(){
numDisplay="5";
if(newStore === "")
{
	writeTo.value += numDisplay;
	numStore += numDisplay;
}
else
{
	numStore += numDisplay;
	switch(operand)
	{
		case "numAdd":
			newStore += parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numSubtract":
			newStore -= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numDivide":
			newStore /= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numMultiply":
			newStore *= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		default:
			writeTo.value += numDisplay;
			break;
	}
}
});
num6.addEventListener('click', function(){
numDisplay = "6";
if(newStore === "")
{
	writeTo.value += numDisplay;
	numStore += numDisplay;
}
else
{
	numStore += numDisplay;
	switch(operand)
	{
		case "numAdd":
			newStore += parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numSubtract":
			newStore -= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numDivide":
			newStore /= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numMultiply":
			newStore *= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		default:
			writeTo.value += numDisplay;
			break;
	}
}
});
num7.addEventListener('click', function(){
numDisplay="7";
if(newStore === "")
{
	writeTo.value += numDisplay;
	numStore += numDisplay;
}
else
{
	numStore += numDisplay;
	switch(operand)
	{
		case "numAdd":
			newStore += parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numSubtract":
			newStore -= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numDivide":
			newStore /= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numMultiply":
			newStore *= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		default:
			writeTo.value += numDisplay;
			break;
	}
}
});
num8.addEventListener('click', function(){
numDisplay = "8";
if(newStore === "")
{
	writeTo.value += numDisplay;
	numStore += numDisplay;
}
else
{
	numStore += numDisplay;
	switch(operand)
	{
		case "numAdd":
			newStore += parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numSubtract":
			newStore -= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numDivide":
			newStore /= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numMultiply":
			newStore *= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		default:
			writeTo.value += numDisplay;
			break;
	}
}
});
num9.addEventListener('click', function(){
numDisplay="9";
if(newStore === "")
{
	writeTo.value += numDisplay;
	numStore += numDisplay;
}
else
{
	numStore += numDisplay;
	switch(operand)
	{
		case "numAdd":
			newStore += parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numSubtract":
			newStore -= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numDivide":
			newStore /= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numMultiply":
			newStore *= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		default:
			writeTo.value += numDisplay;
			break;
	}
}
});
num0.addEventListener('click', function(){
numDisplay="0";
if(newStore === "")
{
	writeTo.value += numDisplay;
	numStore += numDisplay;
}
else
{
	numStore += numDisplay;
	switch(operand)
	{
		case "numAdd":
			newStore += parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numSubtract":
			newStore -= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numDivide":
			newStore /= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numMultiply":
			newStore *= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		default:
			writeTo.value += numDisplay;
			break;
	}
}
});

numDot.addEventListener('click', function(){
numDisplay = ".";
if(newStore === "")
{
	writeTo.value += numDisplay;
	numStore += numDisplay;
}
else
{
	numStore += numDisplay;
	switch(operand)
	{
		case "numAdd":
			newStore += parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numSubtract":
			newStore -= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numDivide":
			newStore /= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		case "numMultiply":
			newStore *= parseFloat(numStore);
			numStore = 0;
			writeTo.value += numDisplay;
			break;
		default:
			writeTo.value += numDisplay;
			break;
	}
}
});

numAdd.addEventListener('click', function(){
if(operand==="numAdd")
{
	newStore += parseFloat(numStore);
	writeTo.value = newStore;
	numStore = "";
}
else
{
	if(typeof numStore === "string")
	{
		if(operand === "newOperand")
		{
			newStore = parseFloat(numStore);
			writeTo.value = newStore;
			numStore = "";
		}
		else
		{
			newStore += parseFloat(numStore);
			writeTo.value = newStore;
			numStore = "";
		}
	}
	else
	{
		if(operand ==="newOperand")
		{
			writeTo.value = numStore;
			numStore="";
		}
		else
		{
			writeTo.value = newStore;
			numStore = "";
		}
	}
}
operand = "numAdd";
});

numSubtract.addEventListener('click', function(){
if(operand==="numSubtract")
{
	newStore -= parseFloat(numStore);
	writeTo.value = newStore;
	numStore = "";
}
else
{
	if(typeof numStore === "string")
	{
		if(operand === "newOperand")
		{
			newStore = parseFloat(numStore);
			writeTo.value = newStore;
			numStore = "";
		}
		else
		{
			newStore -= parseFloat(numStore);
			writeTo.value = newStore;
			numStore = "";
		}
	}
	else
	{
		if(operand ==="newOperand")
		{
			numStore="";
			writeTo.value = numStore;
		}
		else
		{
			writeTo.value = newStore;
			numStore = "";
		}
	}
}
operand = "numSubtract";
});

numDivide.addEventListener('click', function(){
if(operand==="numDivide")
{
	newStore /= parseFloat(numStore);
	writeTo.value = newStore;
	numStore = "";
}
else
{
	if(typeof numStore === "string")
	{
		if(operand === "newOperand")
		{
			newStore = parseFloat(numStore);
			writeTo.value = newStore;
			numStore = "";
		}
		else
		{
			newStore /= parseFloat(numStore);
			writeTo.value = newStore;
			numStore = "";
		}
	}
	else
	{
		if(operand === "newOperand")
		{
			numStore="";
			writeTo.value = numStore;
		}
		else
		{
			writeTo.value = newStore;
			numStore = "";
		}
	}
}
operand = "numDivide";
});

numMultiply.addEventListener('click', function(){
if(operand==="numMultiply")
{
	newStore *= parseFloat(numStore);
	writeTo.value = newStore;
	numStore = "";
}
else
{
	if(typeof numStore === "string")
	{
		if(operand === "newOperand")
		{
			newStore = parseFloat(numStore);
			writeTo.value = newStore;
			numStore = "";
		}
		else
		{
			newStore *= parseFloat(numStore);
			writeTo.value = newStore;
			numStore = "";
		}
	}
	else
	{
		if(operand === "newOperand")
		{
			numStore="";
			writeTo.value = numStore;
		}
		else
		{
			writeTo.value = newStore;
			numStore = "";
		}
	}
}
operand = "numMultiply";
});

numDelete.addEventListener('click', function(){
if(numStore.length > 0)
{
	if(numStore.length === 1)
	{
		numStore = "";
		writeTo.value = numStore;
	}
	else
	{
		numStore = numStore.substring(0, numStore.length - 1);
		writeTo.value = numStore;
	}
}
else
{
	writeTo.value = "";
}
});

numReset.addEventListener('click', function(){
writeTo.value = "";
newStore = 0;
numStore = "";
operand = "newOperand";
});

numEqual.addEventListener('click', function(){
	switch(operand){
		case "numAdd":
			newStore += parseFloat(numStore);
			writeTo.value = newStore;
			break;
		case "numSubtract":
			newStore -= parseFloat(numStore);
			writeTo.value = newStore;
			break;
		case"numDivide":
			newStore /= parseFloat(numStore);
			writeTo.value = newStore;
			break;
		case "numMultiply":
			newStore *= parseFloat(numStore);
			writeTo.value = newStore;
			break;
		default:
			break;
	}
	operand = "newOperand";

});