if(localStorage.getItem("isLoggedIn") !== "true"){
  window.location.href = "index.html";
}

document.getElementById("logoutBtn")
.addEventListener("click",function(){

  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";

});

document.getElementById("employeeCount")
.innerText = 17;

document.getElementById("presentCount")
.innerText = 15;

document.getElementById("leaveCount")
.innerText = 2;

document.getElementById("payrollCount")
.innerText = "$120,000";
