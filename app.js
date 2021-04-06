// async function getRes(q, api_key) {
//   const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
//     params: { q: q, api_key: api_key },
//   });
//   console.log(res.data.data);
// }

// getRes("cat", "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym");

const searchInput = $("#searchTerm");
const GIFArea = $("#gifImages");

function addGIF(res) {
  let resultNums = res.data.data.length;
  if (resultNums) {
    let randomImg = Math.floor(Math.random() * resultNums);
    let newCol = $("<div>", { class: "col-3 m-3" });
    let newGIF = $("<img>", {
      src: res.data.data[randomImg].images.original.url,
      class: "w-100 justify-content-center",
    });
    newCol.append(newGIF);
    GIFArea.append(newCol);
  }
}

$("#searchBtn").on("click", async function (evt) {
  evt.preventDefault();

  let searchVal = searchInput.val();
  if (searchVal.length === 0) {
    return;
  }

  searchInput.val("");

  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: searchVal, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });

  addGIF(res);
});

$("#removeBtn").on("click", function () {
  GIFArea.empty();
});
