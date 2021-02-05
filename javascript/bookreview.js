let content = document.getElementsByClassName('content')[0];
content.scrollIntoView({behavior: "smooth"});
setTimeout(()=>{
    document.getElementById('floaterMadeInRwanda').style.display = "block";
}, 2500);