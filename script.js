window.onload = loadFunc;

function loadFunc(event)
{
    document.title = document.getElementById("text").innerText = "Boilerplate";
    document.getElementById("aButton").onclick = clickFunc;
}

function clickFunc(event)
{
    if(event.target.id == "aButton")
    {
	alert("Clicked");
        console.log("Clicked");
    }
}
