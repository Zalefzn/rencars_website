function getRegister(){
    username = document.getElementById("username-regis").value;
    email = document.getElementById("email-regis").value;
    password = document.getElementById("password-regis").value;

    if(!username && !email && !password ){
        const data = alert("Data Tidak Boleh Kosong!!");
        return data;
    } else {
        if(email && password != null){
            setTimeout(() => {
                alert("Data Berhasil di Simpan!");
                window.location.replace("/src/components/formLogin/formLogin.html");
            },3000);
        }
    }
}