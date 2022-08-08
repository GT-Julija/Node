const exampleForm = document.getElementById("form");
exampleForm.addEventListener("submit", handleSubmitExapleForm);

fetch("http://localhost:8080/users")
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
    const ul = document.createElement("ul");
    response.forEach((users) => {
      const li = document.createElement("li");
      li.textContent = users;
      ul.append(li);
    });

    document.body.append(ul);
  })
  .catch((error) => console.error(error));

fetch("http://localhost:8080/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  });



  app.get("/users", (req, res) => {
    res.send(users);
  });
  
  app.post("/users", (req, res) => {
    console.log(req.body);
    users.push(req.body.user);
    res.send(req.body);
  });
  const links = ["https://www.google.lt/"];
  
  app.get("/links", (req, res) => {
    res.send(links);
  });
  
  app.post("/links", (req, res) => {
    console.log(req.body);
    links.push(req.body.link);
    res.send(req.body);
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });