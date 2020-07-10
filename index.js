const longOperation = () => {
  return Promise.resolve().then(() => {
    let i = 0;

    while (i < 1000000000) {
      i++;
    }

    return "👩‍💻💾🤯";
  });
};

function runOrderExample() {
  const start = new Date().getTime();

  function log(val = "command") {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `${val} - time elapsed: ${
      new Date().getTime() - start
    } ms`;
    document.getElementById("run-order").appendChild(newDiv);
  }

  log("Synchronus command 1");

  longOperation().then(log);

  log("Synchronus command 2");
}
