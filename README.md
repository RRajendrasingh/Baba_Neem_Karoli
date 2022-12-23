<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>



    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');

        * {
            font-family: orbitron;
        }
body{
    display: block;
    position: relative;
    overflow: hidden;
    background: #272525;
}
.box{
    border: 2px solid fuchsia;
    display: flex;
    justify-content: center;
}

#timer{
    width: calc(100vh * 1);
    border: 2px solid white;
    font-size: 2rem;
    color: fuchsia;
    text-align: center;
    transition: 0.7s;

}
#timer:hover{
    text-shadow: 0px 0px 10px #8D60DE;
}
    </style>


</head>
<body>
    <div class="box">
    <div id="timer">is time:-</div>
</div>
</body>

<script>

setInterval(() => {


let t = new Date();
let h = t.getHours();
let m = t.getMinutes();
let s = t.getSeconds();
let session = "AM"



h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;


if (h > 12) {
   h = h-12;
   session = "PM"
   
  }
  let fullTime = `Time is : ${h}:${m}:${s} ${session}`

document.getElementById("timer").innerHTML = fullTime; 
}, 1000);





</script>


</html>
