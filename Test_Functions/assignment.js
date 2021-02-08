const task3Element = document.getElementById('task-3');

function showText()
{
    alert("This function simply shows text!");
}

function showNameText(name)
{
    alert(name);
}

function combineStrings(stringOne, stringTwo, stringThree)
{
    const combineString = stringOne + stringTwo + stringThree;
    return combineString;
}

showText();
showNameText("Marcin");
alert(combineStrings("Marcin ", "is very ", "nice."));

task3Element.addEventListener("click", showText);