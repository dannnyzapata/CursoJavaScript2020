function onoff() {

    var image = document.getElementById('myImage');

    if (image.src.match("focoOn")) {

        image.src = "focoOff.png";

    } else {

        image.src = "focoOn.png";

    }

}