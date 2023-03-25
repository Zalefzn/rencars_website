function getLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(!username && !password){
        const data = alert("Username dan Password Tidak Boleh Kosong!")
        return data;
    } else{
        if(username && password != null){
            setTimeout(() => {
                alert("Anda Berhasil Login!");
                window.location.replace("/src/components/homePage/homePage.html");
            },3000)
            // fetch("http://localhost:3007/userCars").then((res, rej) => {
                
            // })
        }
    }
}