import firebase from 'firebase'
      
         var firebaseConfig = {
            apiKey: "AIzaSyCyrBCgj4rhDpZkEZILN-Ka1Anfd9A8Zq0",
            authDomain: "maravilhas-do-seculo.firebaseapp.com",
            projectId: "maravilhas-do-seculo",
            storageBucket: "maravilhas-do-seculo.appspot.com",
            messagingSenderId: "313534077862",
            appId: "1:313534077862:web:3b22c375471640f0704d67",
            measurementId: "G-GNRVBL3SQ7"
          };

          if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
          }
                 

export default firebase                        