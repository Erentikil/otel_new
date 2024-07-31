console.log(" -------- httpService.js loaded successfully ----------");

const httpService = (api) => {
  return;
};

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// async function getData(url) {
//   try {
//     const response = await fetch(url, {
//       headers: myHeaders,
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     return json;
//   } catch (error) {
//     console.error(error.message);
//     throw error; // Hata durumunda hatayı fırlat
//   }
// }

async function getData(url) {
  console.log("---- getData function start ----");

  try {
    const response = await fetch(url, {
      headers: myHeaders,
    });

    if (!response.ok) {
      throw new Error("Response yüklenemedi");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
