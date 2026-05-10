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