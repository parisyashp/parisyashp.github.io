document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {
        var navbar = document.getElementById('navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    var getToKnowButton = document.querySelector(".btn_home");
    var profileElement = document.querySelector("#profile");
    getToKnowButton.addEventListener("click", function (event) {
        event.preventDefault();
        profileElement.classList.add("active");
        profileElement.scrollIntoView({ behavior: "smooth" });
    });

    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const subjectInput = document.getElementById("subjectInput");
    const messageInput = document.getElementById("messageInput");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        let errorMessage = "";
        if (!nameInput.value) {
            errorMessage += "Nama harus diisi.\n";
        }
        if (!emailInput.value) {
            errorMessage += "Email harus diisi.\n";
        } else {
            const emailRegex = /@gmail\.com$/;
            if (!emailRegex.test(emailInput.value)) {
                errorMessage += "Alamat email harus mengandung '@gmail.com'.\n";
            }
        }
        if (!subjectInput.value) {
            errorMessage += "Subjek harus diisi.\n";
        }
        if (!messageInput.value) {
            errorMessage += "Pesan harus diisi.\n";
        }
        if (errorMessage) {
            alert(errorMessage);
        } else {
            alert("Pesan Anda terkirim!");
            nameInput.value = "";
            emailInput.value = "";
            subjectInput.value = "";
            messageInput.value = "";
        }
    });
});
