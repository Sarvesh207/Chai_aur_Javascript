let url = "https://api.github.com/user/Sarvesh207";

//  handle api using .then/.catch
// function getData() {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getData();

async function getApiData(){
  try {
      const data  =  await fetch(url);
      const result = await data.json();
      console.log(result);
  } catch (error) {
    console.log(error);
  }
}
getApiData();
