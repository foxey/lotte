function runit() {
    document.getElementById("hoihoi").innerHTML = "hoi hoi hoi";
}

function clickme() {
//    alert("Button clicked!");
//    console.log("Button Clicked");
    var element = document.getElementById("hoihoi").innerHTML;
    if (element === "hoi hoi") {
        document.getElementById("hoihoi").innerHTML = "hoi hoi hoi";
    } else {
        document.getElementById("hoihoi").innerHTML = "hoi hoi";
    }
}