function getData(type, id) {
  return fetch(`https://jsonplaceholder.typicode.com/${type}/${id}`).then(
    (response) => {
      // if (type === "users") {
      //   throw new Error("uh oh!");
      // }
      return response.json();
    }
  );
}

function getAllTheData() {
  function log(val) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `${val}`;
    document.getElementById("network").appendChild(newDiv);
  }

  getData("todos", 1)
    .then((todo) => {
      log(`Todo: ${todo.title}`);
      return todo;
    })
    .then((todo) => {
      return getData("users", todo.userId);
    })
    .then((user) => {
      log(user.username);
    })
    .catch((err) => {
      console.log(err);
    });
}

// async function getAllThatData() {
//   const todo = await getData("todos", 1);
//   const user = await getData("users", todo.userId);

//   return `${todo.title}, ${user.username}`;
// }
