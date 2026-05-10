function filter(type) {
  let rooms = document.querySelectorAll(".room");

  rooms.forEach(room => {

    if (type === "all") {
      room.classList.remove("hide");
    }

    else if (room.classList.contains(type)) {
      room.classList.remove("hide");
    }

    else {
      room.classList.add("hide");
    }

  });
}

function updateMarsTime() {
  const now = new Date();

  const earthSeconds =
    now.getHours() * 3600 +
    now.getMinutes() * 60 +
    now.getSeconds();

  const marsSecondsInDay = 88775.244;

  let marsSeconds = (earthSeconds / 86400) * marsSecondsInDay;

  let hours = Math.floor(marsSeconds / 3600);
  let minutes = Math.floor((marsSeconds % 3600) / 60);
  let seconds = Math.floor(marsSeconds % 60);

  document.getElementById("marsTime").innerText =
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
}

setInterval(updateMarsTime, 1000);
updateMarsTime();
