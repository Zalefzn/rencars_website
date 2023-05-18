function getLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //failed login
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    //success modal
    var modal2 = document.getElementById("success");
    var btn2 = document.getElementsByClassName("btn-success");
    var span2 = document.getElementsByClassName("tutup")[0];

    if(!username && !password){
        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else{
        if(username && password != null){
                btn2.onclick = function() {
                    modal2.style.display = "block";
                }
                span2.onclick = function() {
                    modal2.style.display = "none";
                }
                
                window.onclick = function(event) {
                    if (event.target == modal2) {
                        modal2.style.display = "none";
                    }
                }
                window.location.replace("/src/components/homePage/homePage.html");
            }
            // fetch("http://localhost:3007/userCars").then((res, rej) => {
                
            // })
        }
    }