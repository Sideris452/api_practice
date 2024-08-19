const getData = async function () {
  const res = await fetch("https://api.artic.edu/api/v1/artworks/129884");
  const data = await res.json();
  console.log(data);
};
getData();
