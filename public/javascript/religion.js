
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyAOpZpH9ezHk78KeIfVD0J98Nyyf_sFK70",
            authDomain: "intiti-website.firebaseapp.com",
            projectId: "intiti-website",
            storageBucket: "intiti-website.appspot.com",
            messagingSenderId: "620651830390",
            appId: "1:620651830390:web:f03da58ecc2a69c99f1357",
            measurementId: "G-LPTBMTEGLD"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        const loader = document.getElementById('loader');

        var db = firebase.firestore();
        db.collection('mainArticles').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            });
        }).catch((error) => {
        });
        // loadMainArticle();

        function loadMainArticle() {
            var row3 = document.getElementById('row3');
            loader.style.display = "block";
            db.collection('presenter').get().then((querySnapshot) => {
                var allPresenters = [];

                querySnapshot.forEach((doc) => {
                    allPresenters.push(doc.data());
                });
                var idMaker = allPresenters[0].Title + "ID";
                row3.innerHTML = `
        <div class="mainArticle"  style="background-image: url('${allPresenters[0].Picture}');">
               <h3>${allPresenters[0].Title}</h3>
           </div>
           <div class="secondaryItems">
               <div class="secondaryRow">
                   <div class="secArticle" onclick="openNewsWindow('${allPresenters[1].Body}', 
                   '${allPresenters[1].Date}',
                   '${allPresenters[1].Picture}',  
                   '${allPresenters[1].Title}',
                   '${allPresenters[1].Writer}',  )" style="background-image: url('${allPresenters[1].Picture}');">
                    
                       <p class="title">${allPresenters[1].Title}</p>
                       <p class="tag"></p>
                   </div>
                   <div class="secArticle"  onclick="openNewsWindow('${allPresenters[2].Body}', 
                   '${allPresenters[2].Date}',
                   '${allPresenters[2].Picture}',  
                   '${allPresenters[2].Title}',
                   '${allPresenters[2].Writer}',  )" style="background-image: url('${allPresenters[2].Picture}');">
                    <p class="title">${allPresenters[2].Title}</p>
                    <p class="tag"></p>
                </div>
               </div>
               <div class="secondaryRow">
                <div class="secArticle"  onclick="openNewsWindow('${allPresenters[3].Body}', 
                   '${allPresenters[3].Date}',
                   '${allPresenters[3].Picture}',  
                   '${allPresenters[3].Title}',
                   '${allPresenters[3].Writer}',  )" style="background-image: url('${allPresenters[3].Picture}');">
                    <p class="title">${allPresenters[3].Title}</p>
                    <p class="tag"></p>
                </div>
                <div class="secArticle"  onclick="openNewsWindow('${allPresenters[4].Body}', 
                   '${allPresenters[4].Date}',
                   '${allPresenters[4].Picture}',  
                   '${allPresenters[4].Title}',
                   '${allPresenters[4].Writer}',  )" style="background-image: url('${allPresenters[4].Picture}');">
                 <p class="title">${allPresenters[4].Title}</p>
                 <p class="tag"></p>
             </div>
            </div>
           </div>
        `;

            })
            

        }
        function setBackground(id, bg){
        }

      loadAnySection();

        function loadAnySection() {
            loader.style.display = "block";
            let MINIMUMNUMBER = 0;
            var mainDocument = document.getElementById('business');
            db.collection('religion').get().then((qSnapShot) => {
                qSnapShot.forEach((doc) => {
                    var SLICED = String(doc.data().Body).slice(0, 70);
                   
                        mainDocument.innerHTML += `
                        <div class="news-card" onclick="ONW('${String(doc.data().Body).replace(/[^a-zA-Z0-9 <>,./-]/g, "")}',
                        '${String(doc.data()._Date).replace(/[^a-zA-Z0-9 <>,./-]/g, "")}', 
                        '${doc.data().Picture}',
                        '${String(doc.data().Title).replace(/[^a-zA-Z0-9 <>,./-]/g, "")}',
                        '${String(doc.data().Writer).replace(/[^a-zA-Z0-9 <>,./-]/g, "")}')">
                                <img src="${doc.data().Picture}" alt="" class="news-image">
                                <p class="news-header">${String(doc.data().Title).replace(/[^a-zA-Z0-9 <>,./-]/g, "")}</p>
                                <p class="news-content">
                                      ${SLICED}
                                </p>
                            </div>
                       `;
              
                })
            }).then(()=>{
                loader.style.display = "none";
            })
            
        }
function ONW(Body, _date, Picture, Title,Writer){
    let data = `<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">  <title>Intiti Magazine</title> <title>Document</title> <style>     *{    margin: 0;    padding: 0;     font-family: Arial, Helvetica, sans-serif;    font-size: 16px;    overflow-x: hidden;}.content{    width: 100%;    height: 100%;    background: #f8f8f8;    /* overflow-x: hidden; */}#hamburger img{    height: 20px;    width: 40px;    display: none;}/* row for adverts */.back_floater{    position: fixed;    background: linear-gradient(180deg, rgb(192, 14, 14), rgb(145, 11, 11));    color: rgb(243, 243, 243);    font-weight: 500;    border: none;    padding: 10px;    margin: 5px;    border-radius: .5rem;}.navMobile{    display: flex;    flex-direction: column;    text-align: left;    padding-bottom: 10px;    background: #f8f8f8;    padding-top: 20px;}.navMobile p{    font-size: 2rem;    margin-left: 10%;    margin-top: 2px;}.purenav{    display: none;    grid-template-columns: 2fr 1fr;    position: fixed;    z-index: 1 ;    width: 100%;    height: 100%;    top: 0;}.purenav .exiter{    background: #000;    opacity: 50%;}.row1{    display: flex;    flex-direction: row;}.row1 img{    width: 50%;}/* Row with LOGO and navigation bar */.row2{    display: flex;    flex-direction: row;    background: url("https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/imigongo.png?alt=media&token=db0b4bc9-d91c-42d9-ac65-12d74b81fbec");    background-size: cover;    background-repeat: no-repeat;}.row2 img{    padding:0;    margin:0;    width: 15.3%;    margin-left: 1.97584097859327%;    height: 100%;    margin-top: auto;    margin-bottom: auto;}.row2 .navbar{    display: flex;    flex-direction: row;    margin-left: 3.96941896024465%;    margin-top: 1.45259938837921%;    margin-bottom: 1.45259938837921%;    width: 100%;}.row2 .navbar p{    margin-left: 2.67584097859327%;    font-weight: 600;    height: 100%;    color: #535353;    cursor: pointer;    border: 4px transparent}/* Microsoft Like Hover */.row2 .navbar p:hover{    border-bottom: 2px #535353 dashed;}.row2 .navbar p:first-child{    border-bottom: 4px #D52A31 solid;}.row3{    display: grid;    grid-template-columns: 3fr 1fr;    margin-left: 2.5%;    margin-right: 2.5%;}.row3 .main{    display: flex;    flex-direction: column;}.row3 .main h1{    font-size: 3rem;    opacity: 70%;    font-weight: 500;}.row3 .main .details{    display: grid;    grid-template-rows: 1fr 1fr;}.row3 .main .details .writer{    font-weight: 500;}.row3 h2{    font-size: 1.4rem;    margin: 4px;    word-break: break-all;    word-wrap: break-word;    border-left: 10px #D52A31 solid;    opacity: 80%;}.row3 .main .details .dateWritten{    font-size: .8rem;    opacity: 50%;}.row3 .main img{    width: 100%;    height: 500px;    margin-top: 50px;    margin-bottom: 100px;}.row3 .advert{    display: grid;    grid-template-rows: 1fr 1fr 1fr 1fr;    padding-left: 10%;    margin-top: 6rem;    height: 90rem;}.row3 .advert img{    width: 98%;    height: 95%;    margin-top: .5rem;}.wa{   display: grid;   grid-template-columns: 2.75fr 1fr; }.wa .animees{    display: grid;    grid-template-rows: 1fr 1fr;    padding-left: 10%;    padding-right: 10%;    height: 200px;}.wa .animees img{    width: 98%;    height: 95%;    margin-top: .5rem;}.row5 .news-au-pair{    margin-top: 3rem;    display: grid;    grid-template-columns: 1fr 1fr 1fr;}.row5 .news-au-pair .news-card img{    width: 100%;    height: 9rem;    border: none;}.row5  .news-au-pair .news-card{    margin-left: 5%;    cursor: pointer;box-shadow:  5px 5px 10px #e8e8e8,              5px -5px 10px #ffffff;     padding-bottom: 1rem;           margin-bottom: 1rem;  }.row5  .news-au-pair .news-card:hover img{    opacity: 80%;}.row5  .news-au-pair .news-card .news-header{    font-weight: 500;    color: #0C4B6E;    font-size: 1.2rem;    margin: .5rem;}.row5  .news-au-pair .news-card .news-content{    color: #535353;    margin-left: .5rem;    margin-right: .5rem;}.footer{    background: #0C4B6E;    display: grid;    padding: 3%;    grid-template-columns: 1fr 1fr 1fr;    margin-top: 3rem;}.footer .footer-item p{    font-size: 1rem;    color: #fff;}.footer .footer-item{    display: flex;    flex-direction: row;    margin-top: 1rem;}.footer .footer-group h2{    color: #fff;    font-size: 2rem;}.footer .footer-item img{    width: 1.5rem;    height: 1.5rem;    padding-right: .5rem;}@media only screen and (min-width:  0px) and (max-width: 860px){    *{        font-size: 14px;    }    #hamburger img{        display: block;    }        .row2{        display: none;    }    .row1{        display: flex;        flex-direction: row;        background: #fff;    }    .row1 .advert{        width: 90%;    }    .row1 .hamburger{        margin-top: 15px;    }    #deepBlue{        display: none;    }    .footer{        display: flex;        flex-direction: column;    }}@media only screen and (min-width: 300px) and (max-width: 600px){    *{        font-size: 12px;;    }    .row3 .advert{        display: none;    }    .row5 {        display: none;    }    .wa .animees{        display: none;    }    .row3{        display: flex;    }    .row3 .main img{        height: 200px;        width: 100%    }}@media only screen and (min-width: 0px) and (max-width: 299px){    *{        font-size: 10px;    }    } </style></head><body> <div class="content" id="content">     <button class="back_floater" onclick="location.reload()">Back</button>     <div class="purenav" id="pureNav">        <div class="navMobile" id="navMobile" >            <p class="navitem">Home</p>            <p class="navitem" onclick="location.href= './pages/books-publication.html '">Magazines</p>            <p class="navitem" onclick="location.href= './pages/business.html '">Business</p>            <p class="navitem" onclick="location.href= './pages/tech.html '">Tech</p>            <p class="navitem" onclick="location.href= './pages/culture.html '">Culture</p>            <p class="navitem" onclick="location.href= './pages/religion.html '">Gospel</p>            <p class="navitem" onclick="location.href= './pages/entertainment.html '">Entertainment</p>            <p class="navitem" onclick="location.href= '../pages/videoPortal.html '">Video Portal</p>            <p class="navitem" onclick="location.href= '../pages/aboutUs.html '">About Us</p>        </div>        <div class="exiter" onclick="closeBurger()"> </div>       </div> <div class="row1">    <img class="advert"  src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/intiti-white.png?alt=media&token=4f3945ff-f657-46d8-acb7-ddd3522008b8">    <img class="advert" id="deepBlue" src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/Made-in-rwanda-slide.gif?alt=media&token=d74af4ed-9c07-46f0-a3cb-bacab6c1a9a4" id="deepBlue">    <div class="hamburger" id="hamburger" onclick="openCloseMobileNav()">        <img src="https://res.cloudinary.com/bn47/image/upload/v1613662510/hamburger_b93xmn.png" alt="">    </div> </div> <!-- <div class="row2"> <div class="navbar" id="navbar"> <p class="navitem" onclick="location.href= '../index.html '">Home</p> <p class="navitem" onclick="location.href= '../pages/books-publication.html '">Magazines</p> <p class="navitem" onclick="location.href= '../pages/business.html '">Business</p> <p class="navitem" onclick="location.href= '../pages/tech.html '">Tech</p> <p class="navitem" onclick="location.href= '../pages/culture.html '">Culture</p> <p class="navitem" onclick="location.href= '../pages/religion.html '">Gospel</p> <p class="navitem" onclick="location.href= '../pages/entertainment.html '">Entertainment</p> <p class="navitem">Video Portal</p> <p class="navitem">About Us</p> </div> </div> --> <div class="row3"> <div class="main"> <h1> {{Title}} </h1> <div class="details"> <p class="writer">{{Writer}}</p> <p class="dateWritten">{{Date}}</p> </div> <img src=" {{Picture}} " alt=""> <div class="_body">  {{Body}}  </div> </div> <div class="advert"> <img src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/Africa-Improved-Food-1.gif?alt=media&token=7ef66f04-a489-4bab-9a5b-d0409392b8c0" alt=""> <img src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/Heineken_-1.gif?alt=media&token=326b93e7-4ebd-47c6-8399-14436087b527" alt=""> <img src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/Sahara-low.gif?alt=media&token=62d09de0-a7be-4781-94fb-129f79501f07" alt=""> <img src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/Export-Import.gif?alt=media&token=a881cb18-f124-4b3f-ab69-23d536f1485f" alt=""> </div>  </div><div class="footer">    <div class="footer-group">        <h2>Contact Info</h2>        <div class="footer-item">            <img src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/location.png?alt=media&token=7eebba8a-4fdc-4124-bdaf-f1177cfe41b2" alt="" class="footer-image">            <p class="footer-detail"><br> Kanombe near Airport </p>        </div>        <div class="footer-item">            <img src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/phone.png?alt=media&token=7997ccf5-c47d-4b3a-92d6-e8dc09dacf3c" alt="" class="footer-image">            <p class="footer-detail">0784678065 / 0785425899</p>        </div>        <div class="footer-item">            <img src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/message.png?alt=media&token=422cafa9-97a2-4543-a6b6-fe93f1577ade" alt="" class="footer-image">            <p class="footer-detail">intiti.rw@gmail.com</p>        </div>    </div>    <div class="footer-group">        <h2>Working hours</h2>        <div class="footer-item">            <img src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/clock.png?alt=media&token=54ae5109-b5c6-4c3b-92c8-3eacc8a6a1d5" alt="" class="footer-image">            <p class="footer-detail">8:00 am up to 6:00 pm </p>        </div>    </div>    <div class="footer-group">        <h2>Our Services</h2>        <div class="footer-item">            <img src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/circle.png?alt=media&token=39dd9177-0a7d-4463-b5fb-3975682ef40c" alt="" class="footer-image">            <p class="footer-detail">Web design and development</p>        </div>        <div class="footer-item">            <img src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/circle.png?alt=media&token=39dd9177-0a7d-4463-b5fb-3975682ef40c" alt="" class="footer-image">            <p class="footer-detail">Software development</p>        </div>        <div class="footer-item">            <img src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/circle.png?alt=media&token=39dd9177-0a7d-4463-b5fb-3975682ef40c" alt="" class="footer-image">            <p class="footer-detail">Graphics design</p>        </div>        <div class="footer-item">            <img src="https://firebasestorage.googleapis.com/v0/b/intiti-website.appspot.com/o/circle.png?alt=media&token=39dd9177-0a7d-4463-b5fb-3975682ef40c" alt="" class="footer-image">            <p class="footer-detail">Elaboration Strategy</p>        </div>    </div></div> </div>     <!-- The core Firebase JS SDK is always required and must be listed first -->    <script src="https://www.gstatic.com/firebasejs/8.2.3/firebase.js"></script>    <!-- TODO: Add SDKs for Firebase products that you want to use     https://firebase.google.com/docs/web/setup#available-libraries -->    <script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-analytics.js"></script> <script>          document.getElementById('content').scrollIntoView({behavior: "smooth"}); </script></body></html>`
        let s = data.toString().replace('{{Body}}', Body).replace('{{Title}}', Title).replace('{{Picture}}', Picture).replace('{{Date}}', _date).replace('{{Writer}}', Writer);
        document.open();
        document.write(s);
        

}
function openCloseMobileNav(){
    document.getElementById('pureNav').style.display = 'grid'
}
function closeBurger(){
document.getElementById('pureNav').style.display = 'none';

}
let content = document.getElementsByClassName('content')[0];
setTimeout(()=>{
}, 2500);