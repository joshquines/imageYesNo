// SEND REGISTER TO DATABASE
function toDatabaseRegister(){
        // Get the value of form elements here
        var x = document.getElementById("register");
        var text = "";
        var username = "";
        var password = "";
    
        for (i = 0; i < 2 ;i++) {
            if (i == 0){
                username = x.elements[i].value;
            }
            else if (i == 1){
                password = x.elements[i].value;
            }
        } 
    
        document.getElementById("uploadResponse2").innerHTML = "REGISTER SUCCESS";
        document.getElementById('registerModal').style.display="none";

}

// SEND LOGIN TO DATABASE
function toDatabaselogin(){
    // Get the value of form elements here
    var x = document.getElementById("login");
    var text = "";
    var username = "";
    var password = "";

    for (i = 0; i < 2 ;i++) {
        if (i == 0){
            username = x.elements[i].value;
        }
        else if (i == 1){
            password = x.elements[i].value;
        }
    } 

    document.getElementById("uploadResponse2").innerHTML = "LOGIN SUCCESS";
    document.getElementById('registerModal').style.display="none";

}

// SEND UPLOADED FILE TO DATABASE
function toDatabaseUpload(){


    // Get the value of form elements here
    var x = document.getElementById("customNames");
    var text = "";
    var imgFilename = "";
    var imgCaption = "";

    for (i = 0; i < 2 ;i++) {
        if (i == 0){
            imgFilename = x.elements[i].value;
        }
        else if (i == 1){
            imgCaption = x.elements[i].value;
        }
    } 

    document.getElementById("uploadResponse2").innerHTML = "UPLOAD SUCCESS";
    document.getElementById('id01').style.display="none";
}


// Upload File
function uploadFile(){

    let txt = ""; // For a respgonse message
    let imageFile = document.getElementById("imageFileUpload"); // CHANGE THE ID 

    // Limit File Size
    let fileType = imageFile.files[0].type;

    if ('files' in imageFile) {

        if (imageFile.files.length == 0) {
            txt = "Select one or more files.";
            document.getElementById("uploadResponse").innerHTML = "Select one or more files."; // DO WE NEED THIS?

        } else if (imageFile.files.length > 1){
            txt = "Please only select 1 file";
            document.getElementById("uploadResponse").innerHTML = "Please only select 1 file"; // DO WE NEED THIS?

        } else if (!(fileType.indexOf('image') != -1)){
            txt += "Needs to be AN IMAGE FILE YOU PLEB";
            document.getElementById("uploadResponse").innerHTML = txt; // DO WE NEED THIS?

        }else {
            for (let i = 0; i < imageFile.files.length; i++) {
                let file = imageFile.files[i];

                // Gets the Filename
                if ('name' in file) {
                    fileName = file.name;
                }

                // Gets the Filesize
                if ('size' in file) {

                    // Check if filesize over 50MB
                    // No ones gonna upload RAWs here LOLOLOL
                    if (file.size > 50000000){
                        txt += "Filesize: " + file.size + " bytes is too large. <br>";
                        document.getElementById("uploadResponse").innerHTML = txt; // DO WE NEED THIS?
                    }
                    else{
                        //alert("File " + fileName + " has been uploaded successfully!");

                        // Get the value of form elements here
                        var x = document.getElementById("customNames");
                        var imgFilename = "";
                        var imgCaption = "";

                        for (i = 0; i < 2 ;i++) {
                            if (i == 0){
                                imgFilename = x.elements[i].value;
                            }
                            else if (i == 1){
                                imgCaption = x.elements[i].value;
                            }
                        }                       

                        // Success Message to HTML Page
                        txt += "Upload of " + fileName + " was successful ";
                        txt += "<br>Filename: " + imgFilename + "<br>Caption: " + imgCaption;
                        document.getElementById ("uploadResponse").innerHTML = txt; // DO WE NEED THIS?
                        console.log("Before database push");

                    }
                }
            }
        }
    }
}