
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
        loadMainArticle();
        loadBooks();
        loadVideosToCards();
        function openCloseMobileNav(){
            document.getElementById('navMobile').style.display = 'grid'
        
    }

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

        loadAnySection('news', document.getElementById('news'));
        loadAnySection('entertainment', document.getElementById('entertainment'));
        loadAnySection('business', document.getElementById('business'));
        loadAnySection('religion', document.getElementById('religion'));
        loadAnySection('culture', document.getElementById('culture'));
        loadAnySection('tech', document.getElementById('tech'));
        //loadAnySection('tech', document.getElementById('tech'));
        function loadAnySection(section, correspondant) {
            loader.style.display = "block";
            let MINIMUMNUMBER = 0; 
            db.collection(section).get().then((qSnapShot) => {
                qSnapShot.forEach((doc) => {
                    var SLICED = String(doc.data().Body).slice(0, 70);
                  
                    if(MINIMUMNUMBER <= 2){
                        correspondant.innerHTML += `
                        <div class="news-card" onclick="ONW('${doc.data().Body}',
                        '${doc.data().Date}', 
                        '${doc.data().Picture}',
                        '${doc.data().Title}',
                        '${doc.data().Writer}',)">
                                <img src="${doc.data().Picture}" alt="" class="news-image">
                                <p class="news-header">${doc.data().Title}</p>
                                <p class="news-content">
                                      ${SLICED}
                                </p>
                            </div>
                        `;
                    }
                 
                    MINIMUMNUMBER += 1;
                })
            }).then(()=>{
                loader.style.display = "none";
            })
            
        }
         


function ONW(Body, _date, Picture, Title,Writer){
    fetch('./pages/Templates/articleRender.html').then(response=> response.text()).then((data)=>{
        let s = data.toString().replace('{{Body}}', Body).replace('{{Title}}', Title).replace('{{Picture}}', Picture).replace('{{Date}}', _date).replace('{{Writer}}', Writer);
        document.open();
        document.write(s);
        
    })
}
function loadBooks() {
    loader.style.display = "block";
    var mainDocument = document.getElementById('others');
    db.collection('books').get().then((qSnapShot) => {

        qSnapShot.forEach((doc) => {
            var SLICED = String(doc.data().Body).slice(0, 70);

             let prepared = `
            <div class="news-card" onclick="location.href='./pages/books-publication.html'" >
            <img src="${doc.data().Picture}"  alt="" class="news-image">
            
            <div class="informations">
                <p class="bookname">${doc.data().Title}</p>
            <p class="bookdescription">${doc.data().AuthorName}</p>
                <div class="start-rating">
                    <img src="https://res.cloudinary.com/bn47/image/upload/v1613659559/star-shaded_pah0nb.png" alt="">
                    <img src="https://res.cloudinary.com/bn47/image/upload/v1613659559/star-shaded_pah0nb.png" alt="">
                    <img src="https://res.cloudinary.com/bn47/image/upload/v1613659559/star-shaded_pah0nb.png" alt="">
                    <img src="https://res.cloudinary.com/bn47/image/upload/v1613659559/star-shaded_pah0nb.png" alt="">
                    <img src="https://res.cloudinary.com/bn47/image/upload/v1613659559/star-shaded_pah0nb.png" alt="">
                </div>
            </div>
           
        </div>
  `;
  mainDocument.innerHTML += prepared;

        })
    }).then(() => {
        loader.style.display = "none";
    })

}
let content = document.getElementsByClassName('content')[0];
function openCloseMobileNav(){
        document.getElementById('pureNav').style.display = 'grid'
}
function closeBurger(){
    document.getElementById('pureNav').style.display = 'none';

}
function loadVideosToCards(){
    const allVideos = document.getElementById("videoClusters");
    firebase.firestore().collection('videos').get().then((snapshot)=>{
        snapshot.forEach((doc)=>{
            allVideos.innerHTML += `
            <div class="video" onclick="openVideo('${doc.data().videoSource}')">
                    <img src="../assets/images/play.png"  style="background-image: url('${doc.data().videoThumbNail}')" alt="">
                    <p class="tag"><span>Video</span></p>
                    <p>${doc.data().videoName}</p>
                </div>
            `;
        })
    })
}