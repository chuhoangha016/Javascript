holder = document.getElementById("holder")
count = -608

function diChuyen() {
  count += 1;
  dem = count + "px";
  holder.style.marginLeft = dem;
  if (count > screen.availWidth-200) { chayHet() }
}

var i = setInterval(diChuyen, 5)

function chayHet() {
  //clearInterval(i)
  setTimeout(() => {
    window.location.assign("https://www.google.com.vn/");
  }, 500)
}