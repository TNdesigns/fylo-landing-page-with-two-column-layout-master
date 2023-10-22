document.addEventListener("DOMContentLoaded", function() {
    const btn1 = document.getElementById("btn1");
    const eml = document.getElementById("email");
    const etx1 = document.getElementById("etxt");
    const btn2 = document.getElementById("btn2");
    const eml2 = document.getElementById("email2");
    const etx2 = document.getElementById("etxt2");

    btn1.addEventListener("click", function () {
        const emailValue = eml.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //to store user data
        const userData = {
            email: ""
        };
        userData.email = emailValue; /*to store user data*/

        if (emailValue === "") {
            etx1.style.opacity = "1";
        } else if (!emailPattern.test(emailValue)) {
            etx1.style.opacity = "1";
        } else {
            etx1.style.opacity = "0";
        }
        eml.value = ""; /*to clear input field*/
        console.log(userData); //to display user data in consolelog*/
    })
    btn2.addEventListener("click", function () {
        const emailValue = eml2.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //to store user data
        const userData = {
            email: ""
        };
        userData.email = emailValue; /*to store user data*/

        if (emailValue === "") {
            etx2.style.opacity = "1";
        } else if (!emailPattern.test(emailValue)) {
            etx2.style.opacity = "1";
        } else {
            etx2.style.opacity = "0";
        }
        eml2.value = ""; /*to clear input field*/
        console.log(userData); //to display user data in consolelog*/
    })
})