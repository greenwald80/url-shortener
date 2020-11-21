const form = document.getElementById("shortForm");

form.onsubmit = function (e) {
  e.preventDefault();
  const link = document.getElementById("link");
  const data = JSON.stringify({ link: link.value });

  fetch("/links/short", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  })
    .then((res) => res.json())
    .then((res) => {
      const ul = document.getElementById("links");
      const li = document.createElement("li");
      li.appendChild(
        document.createTextNode(
          `Short link: ${res.short}, Original: ${res.source}`
        )
      );
      ul.appendChild(li);
    })
    .catch((err) => console.log(err));
};
