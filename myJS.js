// var myP = document.getElementById("btnSubmit");
// btnSubmit.onclick = function (){
// 	var txtUsername = document.getElementById("txtUsername");
// 	var msgError =	document.getElementById("msg-error");

// if (txtUsername.value.length < 5){
// 	msgError.innerHTML = "* Tên quá ngắn.";
// 	msgError.classList.remove("hidden-text");
// } else if (txtUsername.value.length > 20)
// 	msgError.innerHTML = "* Tên quá dài.";
// 	msgError.classList.remove("hidden-text");
// } else
// msgError.innerHTML = "Tên hợp lệ.";
// msg-error.classList.remove("hidden-text");
// msg-error.classList.remove("danger-text");
// msg-error.classList.add("success-text");

var btnSubmit = document.forms ["register-form"] ["btnSubmit"];
btnSubmit.onclick = function (){
	
	var txtUsername = document.forms ["register-form"] ["username"];
	var msgUsername = txtUsername.nextElementSibling;
	if (txtUsername == null || txtUsername.value.length == 0){
		msgUsername.innerHTML = "* Vui lòng nhập tên đăng nhập của bạn.";
		msgUsername.classList.remove("hidden-text");
	} else if (txtUsername.value.length < 5){
 		msgUsername.innerHTML = "* Tên quá ngắn.";
 		msgUsername.classList.remove("hidden-text");
	} else if (txtUsername.value.length > 20){
 		msgUsername.innerHTML = "* Tên quá dài.";
 		msgUsername.classList.remove("hidden-text");
	} else {
		msgUsername.innerHTML = "Tên hợp lệ.";
		msgUsername.classList.remove("hidden-text");
		msgUsername.classList.remove("danger-text");
		msgUsername.classList.add("success-text");
	}

	var txtPassword = document.forms ["register-form"] ["password"];
	var msgPassword = txtPassword.nextElementSibling;

	if (txtPassword == null || txtPassword.value.length == 0){
		msgPassword.innerHTML = "* Không được bỏ trống mật khẩu.";
		msgPassword.classList.remove("hidden-text");
	} else {
		msgPassword.innerHTML = "Mật khẩu hợp lệ";
		msgPassword.classList.remove("hidden-text");
		msgPassword.classList.remove("danger-text");
		msgPassword.classList.add("success-text");
	}	

	var txtfullName = document.forms ["register-form"] ["fullName"];
	var msgfullName = txtfullName.nextElementSibling;
	if (txtfullName == null || txtfullName.value.length == 0){
		msgfullName.innerHTML = "* Vui lòng nhập họ và tên của bạn.";
		msgfullName.classList.remove("hidden-text");
	} else if (txtfullName.value.length < 5){
 		msgfullName.innerHTML = "* Tên quá ngắn.";
 		msgfullName.classList.remove("hidden-text");
	} else if (txtfullName.value.length > 30){
 		msgfullName.innerHTML = "* Tên quá dài.";
 		msgfullName.classList.remove("hidden-text");
	} else {
		msgfullName.innerHTML = "Tên hợp lệ.";
		msgfullName.classList.remove("hidden-text");
		msgfullName.classList.remove("danger-text");
		msgfullName.classList.add("success-text");
	}

	var txtemail = document.forms ["register-form"] ["email"];
	var msgemail = txtemail.nextElementSibling;
	var aCong = txtemail.value.indexOf("@");
	if (txtemail == null || txtemail.value.length == 0){
		msgemail.innerHTML = "* Vui lòng nhập Email của bạn.";
		msgemail.classList.remove("hidden-text");
	} else if (aCong < 0){
 		msgemail.innerHTML = "* Email phải kèm kí hiệu '@'.";
 		msgemail.classList.remove("hidden-text");
 	}	


}


