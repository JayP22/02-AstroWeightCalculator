// var planets is an array//
var planets = [
    ['Sun', 27.9],
    ['Mercury', 0.377],
    ['Venus', 0.9032],
    ['Earth', 1],
    ['Moon', 0.1655],
    ['Mars', 0.3895],
    ['Jupiter', 2.640],
    ['Saturn', 1.139],
    ['Uranus', 0.917],
    ['Neptune', 1.148],
    ['Pluto', 0.06]
];

for (var i = 0; i < planets.length; i++) {
    $('<option/>').val(planets[i][1]).html(planets[i][0]).appendTo('#planetSelector');
}

//Defining button functionality to run javaScript Calculation//

$(document).ready(function() {
    $('#button').on('click', function() {

        // Calling input forms from document//

        var myWeight = $('#weight').val();
        var gravity = $('#planetSelector').val();
        var myPlanet = $('#planetSelector option:selected').html();

        // Transforming input forms//

        var myNewWeight = myWeight * gravity;
        myNewWeight = myNewWeight.toFixed(2);

        //Adds 'the' when you choose sun or moon//

        if (myPlanet === "Sun" || myPlanet === "Moon") {
            $('#answer').html("If you were on the " + myPlanet + " you would weigh " + myNewWeight + "lbs!");
            $('#planetHeader').html("Welcome to the " + myPlanet + "!!");

        } else {
            $('#answer').html("If you were on " + myPlanet + " you would weigh " + myNewWeight + "lbs!");
            $('#planetHeader').html("Welcome to " + myPlanet + "!!");
        }

        //Adds a light gray background when you press the button//

        $('#answer').css('background', '#cccccc');
    })
});
