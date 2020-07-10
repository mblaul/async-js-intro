const sports = {
  football: "🏈",
  soccer: "⚽",
  basketball: "🏀",
  esports: "🎮",
};

function getGameIcon(name) {
  return new Promise((resolve, reject) => {
    const icon = sports[name];
    if (icon) {
      resolve(icon);
    } else {
      reject(new Error("No icon found!"));
    }
  });
}

function runGameIconExample() {
  const start = new Date().getTime();

  function log(val) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `${val} - time elapsed: ${
      new Date().getTime() - start
    } ms`;
    document.getElementById("icons").appendChild(newDiv);
  }

  getGameIcon(document.getElementById("icon-input").value)
    .then(log)
    .catch((err) => console.log(err));

  log("Sync log");
}
