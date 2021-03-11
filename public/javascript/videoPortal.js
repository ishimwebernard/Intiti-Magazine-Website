
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
        let allVideos = document.getElementById('allVideos');
        let mainVideoStreaming = document.getElementById('mainVideoStreaming');
        let videoSource = document.getElementById('videoSource');

        loadVideosToCards();
        function loadVideosToCards(){
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
        function openVideo(videoUrl){
            videoSource.setAttribute('src',videoUrl);
            mainVideoStreaming.load();
            mainVideoStreaming.play();
            mainVideoStreaming.scrollIntoView({behavior: "smooth"});
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