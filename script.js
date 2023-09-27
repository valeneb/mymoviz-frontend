fetch("https://mymoviz-backend-livid.vercel.app/")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#msg").textContent = data.message;
  });
