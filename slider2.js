function sliderBox() {
    var list = document.getElementById('box'),
        newPosition = 0,
        offset = -40;

        console.log(this);
        console.log(sliderBox.prototype);

        console.log(sliderBox);
        //这三条log都执行了2次
        //第一次this打印的是window，说明此时的this还没作用到sliderBox中
        //先这样下面这条语句就会强行再次创建sliderBox()方法并执行初始化函数
        //然后在初始化函数中定期执行动画

        console.log(this.__proto__);

        //第一次flase，第二次true
        console.log(this.__proto__ === sliderBox.prototype);
        //第一次flase，第二次true
        console.log(this.__proto__.__proto__ === Object.prototype);

    if (!(this instanceof sliderBox)) {
        //第二次this已经是sliderBox了
        return new sliderBox().init();
    }
    this.init = function () {
        setInterval(animate, 3000);
    };
    function animate () {
        newPosition+=offset;
        list.style.transition = "transform 0.6s";
        list.style.transform = "translateY(" + newPosition + "px)";
        //持续不停的向上滚动
        if (newPosition < -160) {
            //当偏移量>160像素时，延时触发重置Y轴坐标的方法
            //此时欺骗行正在执行滚动动画，执行完毕和重置恰好同时发生
            setTimeout(function () {
                newPosition = 0;
                list.style.transition = "";
                list.style.transform = "translateY(0)";
            }, 600);
        }
    }
}