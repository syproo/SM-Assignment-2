let Myhead = document.querySelector("#heading");
Myhead.innerHTML = "<b>Hello World</b>";
Myhead.style.color="#fff";
Myhead.style.backgroundColor="#000";
Myhead.style.fontWeight= "bold";

setInterval(function () {
      let color1 = Math.floor(Math.random()*16777215).toString(16);
      let color2 = Math.floor(Math.random()*16777215).toString(16);
      Myhead.style.backgroundColor = "#" + color1;
      Myhead.style.color = "#" + color2;
    }, 1000);