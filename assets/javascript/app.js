
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
    firebase.initializeApp(firebaseConfig);

    //Initializing vars
    let trainName = "";
    let trainDestination = "";
    let trainFrequency = 0;
    let trainTime = "";
    let clickCounter = 1;

    //Capturing clicks of the add train button 
    $("#add-train").on("click", function(event){
        event.preventDefault();
        if ($("#train-input").val(),$("#destination-input").val(),$("#time-input").val(), $("#frequency-input").val() === "") {
            alert("All input fields are mandotary. Enter data in all fields and click the submit button.");

        } else if ($("#time-input").val() > 24) {
            //An alert is displayed when time > 24hrs
            alert("Pls enter the 24 hr time format and time cannot be greater than 24.");
        } else {
                 
            //Declaring the input variables 
            trainName = $("#train-input").val().trim();
            trainDestination = $("#destination-input").val().trim();
            trainTime = $("#time-input").val().trim();
            trainFrequency = $("#frequency-input").val().trim(); 

                 //Make sure values stick
            console.log("Input Values");
            console.log(trainName);
            console.log(trainDestination);
            console.log(trainTime);
            console.log(trainFrequency);

            //Creating a local temp
            var trainDetail = {
                name : trainName,
                destination : trainDestination,
                frequency : trainFrequency,
                time : trainTime
            };
        };
    });