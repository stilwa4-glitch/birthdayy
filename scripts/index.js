document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const u = username.value.trim();
  const p = password.value.trim();

  if (u && p === u) {
    Swal.fire({
      icon: "success",
      title: "Login berhasil 🎉",
      timer: 1200,
      showConfirmButton: false
    }).then(()=>{
      window.location.href = "birthday.html?name=" + encodeURIComponent(u);
    });
  } else {
    Swal.fire("Oops 😅","Password harus sama dengan username","error");
  }
});
