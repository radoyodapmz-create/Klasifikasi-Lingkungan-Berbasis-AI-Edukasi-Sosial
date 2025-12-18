function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "admin") {
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "Username atau Password salah!";
    }
}

function uploadImage() {
    let file = document.getElementById("imageUpload").files[0];
    let desc = document.getElementById("description").value;

    if (!file) {
        alert("Silakan unggah gambar!");
        return;
    }

    let reader = new FileReader();
    reader.onload = function () {
        document.getElementById("preview").src = reader.result;
        document.getElementById("resultText").innerText =
            "Deskripsi: " + desc + 
            "\nHasil AI: Lingkungan Ramah / Perlu Perbaikan (Simulasi)";
    }
    reader.readAsDataURL(file);
}
