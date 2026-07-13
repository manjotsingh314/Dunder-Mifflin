if(!localStorage.getItem("employees")){
localStorage.setItem(
"employees",
JSON.stringify([])
);
}

if(!localStorage.getItem("notifications")){
localStorage.setItem(
"notifications",
JSON.stringify([])
);
}

if(!localStorage.getItem("attendance")){
localStorage.setItem(
"attendance",
JSON.stringify([])
);
}

if(!localStorage.getItem("leaveRequests")){
localStorage.setItem(
"leaveRequests",
JSON.stringify([])
);
}
