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
      let fullBooks = [];
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      const loader = document.getElementById('loader');
     
     
      var db = firebase.firestore();
      loadAnySection();
      function loadAnySection() {
          loader.style.display = "block";
          var mainDocument = document.getElementById('others');
          db.collection('books').get().then((qSnapShot) => {

              qSnapShot.forEach((doc) => {
                  fullBooks.push(doc.data());
                  var SLICED = String(doc.data().Body).slice(0, 70);

                   let prepared = `
                  <div class="news-card" onclick="openBook('${doc.data().Title}')" >
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

      function openBook(Book) {
          var targetBook;
          for(let sampleBook of fullBooks){
            if(sampleBook.Title == Book){
                targetBook = sampleBook;
            }
          }
          fetch('../pages/Templates/bookreview.html').then(response => response.text()).then((data) => {
            let k = '';  
             k = data.replaceAll(`{{AuthorName}}`, targetBook.AuthorName)
             .replaceAll(`{{AuthorPicture}}`, targetBook.AuthorPicture)
             .replaceAll(`{{DatePublished}}`, targetBook.DatePublished)
             .replaceAll(`{{FileSize}}`, targetBook.FileSize)
             .replaceAll(`{{Pages}}`, targetBook.Pages)
             .replaceAll(`{{PDFPrice}}`, targetBook.PDFPrice)
             .replaceAll(`{{PapersPrice}}`, targetBook.PapersPrice)
             .replaceAll(`{{Picture}}`, targetBook.Picture)
             .replaceAll(`{{Publisher}}`, targetBook.Publisher)
             .replaceAll(`{{Rating}}`, targetBook.Rating)
             .replaceAll(`{{Language}}`, targetBook.Language)
             .replaceAll(`{{Title}}`, targetBook.Title)
             .replaceAll(`{{AboutThisBook}}`, targetBook.AboutThisBook);
             document.open();

              document.write(k);
          })
      }

function openCloseMobileNav(){
    document.getElementById('pureNav').style.display = 'grid'
}
function closeBurger(){
document.getElementById('pureNav').style.display = 'none';

}
      setTimeout(()=>{
      }, 2500);