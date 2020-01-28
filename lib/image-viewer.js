// import ImageViewer from "iv-viewer";
// import "iv-viewer/dist/iv-viewer.css";

// Array.from(document.querySelectorAll(".js-zoom")).forEach(elem => {
//   new ImageViewer(elem);
// });

var viewer = new ImageViewer('#js-zoom', {
  maxZoom: 1000
});
