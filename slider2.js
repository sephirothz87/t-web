function sliderBox() {
    var list = document.getElementById('box'),
        newPosition = 0,
        offset = -40;
    if (!(this instanceof sliderBox)) {
        return new sliderBox().init();
    }
    this.init = function () {
        setInterval(animate, 3000);
    };
    function animate () {
        newPosition+=offset;
        list.style.transition = "transform 0.6s";
        list.style.transform = "translateY(" + newPosition + "px)";
        if (newPosition < -160) {
            setTimeout(function () {
                newPosition = 0;
                list.style.transition = "";
                list.style.transform = "translateY(0)";
            }, 600);
        }
    }
}