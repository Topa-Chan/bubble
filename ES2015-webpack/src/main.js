import{ initMap, handleLocationError, calculateAndDisplayRoute } from "./map_module";

module.exports = {
    initMap, handleLocationError, calculateAndDisplayRoute
}

var sitemapContainer = document.getElementById("sitemap");
var sitemap_ul = document.createElement("ul");
sitemapContainer.appendChild(sitemap_ul);

//Json
var sitemapData;
var request = new XMLHttpRequest();
 
loadData();
 
function loadData() {
  request.open('GET', 'scripts/sitemap.json');
  console.log("loading");
  request.onload = loadComplete;
  request.send();
}
 
function loadComplete(evt) {
  console.log("In loadComplete");
  // console.log(request.responseText);
  sitemapData = JSON.parse(request.responseText);
  console.log("Completed sitemapData");
  createSiteMap();
}

//Create Sitemap
function createSiteMap() {
  console.log("In createSiteMap");
  console.log(sitemapData);
  console.log(sitemapData.pages);
  for (var i = 0; i < sitemapData.pages.length; i++) {
    var li = document.createElement("li");
    var link = document.createElement("a");
  }
}

