var countDownDate = new Date("Oct 14, 2022 10:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = '<div id=day>' + days + "<br>days " + '</div>' + '<div id=hr>' + hours + "<br>hrs " + '</div>' + '<div id=min>' + minutes + "<br>mins " + '</div>' + '<div id=sec>' + seconds + "<br>secs " + '</div>';

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EVENT STARTED";
    }
}, 1000);


// var i = 0;
// var txt1 = 'We are glad to announce the 2nd edition of GDMUN. This edition hopes to improve upon the pre-existing MUN circuit, bringing emphasis upon the participation of budding leaders in Model United Nations. We also share our campus\' aim of becoming Carbon Neutral in the future by being the first Green MUN in the circuit. The last edition was a huge success, with over 300 delegates participating from the top schools in Jammu. This year, we want to top that number, with our 8 committees giving the beginners a chance to explore the different aspects of MUN.<br><br>The secretariats wishes you all the very best and hopes that our conference brings you joy.';
// var speed = 20; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//     if (i < txt1.length) {
//         document.getElementById("word").innerHTML += txt1.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }

// typeWriter()
