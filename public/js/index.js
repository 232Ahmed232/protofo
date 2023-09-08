var typed = new Typed('#typed-text', {
    strings: ["Web-Devloper","Front-End","Back-End"],
    typeSpeed: 40,
    backSpeed: 10,
    loop: true
});

// Array of image sources to be rotated
const images = [
  {img:"http://localhost:3000/img/men/0.png",link:'https://templatemo.com/live/templatemo_590_topic_listing'},
    
  {img:"http://localhost:3000/img/men/1.png",link:'https://templatemo.com/live/templatemo_589_lugx_gaming'},
    
    
   
    // Add more image sources here
  ];
  
  let j = 0;
  const pi = document.getElementById("imgm");
  
  function changeImage() {
    j++;
    if(j>1){
      j =0;
    }
    pi.src = `http://localhost:3000/img/men/${i}.png`
  }
  
  // Time interval in milliseconds (e.g., 3000ms = 3 seconds)
  const intervalTime = 1500;
  setInterval(changeImage, intervalTime);
  
  var i = 0;

  const img = document.getElementById("ch");
  const btn = document.getElementById("jaba");

  function fd(){
    i++;
    if(i>1){
      i =0;
    }
    btn.href = images[i].link
    img.style.background = `url(http://localhost:3000/img/men/${i}.jpg)`
  }
  function bd(){
    i--;
    if(i<0){
      i =1;
    }
    btn.href = images[i].link
    img.style.background = `url(http://localhost:3000/img/men/${i}.jpg)`
  }
  setInterval(fd, 4000);

 
  


// img.src = `http://localhost:3000/img/men/${i}.png`