function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "test" && password == "test"){
		alert("Login success!");
		window.location.replace("psuedoku.html");
	} else {
		alert("Login failed!");
	}
}