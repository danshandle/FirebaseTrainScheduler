
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBsj4-wtLjoVAoV1wcW1F5oxyXgRs4DH-Y",
        authDomain: "allaboardtraintimes.firebaseapp.com",
        databaseURL: "https://allaboardtraintimes.firebaseio.com",
        projectId: "allaboardtraintimes",
        storageBucket: "allaboardtraintimes.appspot.com",
        messagingSenderId: "418124169383",
        appId: "1:418124169383:web:b786d0467b3763366ddb82"
      };

    //Declare a variable
    const database = firebase.database();

    //Initializing vars
    let trainName = "";
    let trainDestination = "";
    let trainFrequency = 0;
    let trainTime = "";
    let clickCounter = 1;