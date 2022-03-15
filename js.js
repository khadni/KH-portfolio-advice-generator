const loadData = async () => {
  try {
    const url = "https://api.adviceslip.com/advice";
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const reload = () => {
  loadData().then((data) => {
    document.getElementById("advice-id").innerHTML = "Advice " + data.slip.id;
    document.getElementById("advice-txt").innerHTML =
      '"' + data.slip.advice + '"';
  });
};
