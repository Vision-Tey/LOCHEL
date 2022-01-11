const form = document.querySelector("form")
const statusTxt = form.querySelector(".modal-footer span");

form.onsubmit = (e) => {
    e.preventDefault();
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "message.php", true); //sending post request to message.php file
    xhr.onload = () => { // once ajax loaded
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.response;
            if(response.indexOf("Email and Password required") != -1 || response.indexOf("Enter a valid email address!") || response.indexOf("Sorry failed to send message!")) {
                statusTxt.style.color = "red";
            } else {
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                }, 3000);
            }

            statusTxt.innerText = response;
            
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}