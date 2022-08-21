function changeLikes(){
  var elem = Document.getElementById("likesButton");
  if (elem.value=="Sort by likes") 
      elem.value = "Sort by likes: highest";
  if (elem.value=="Sort by likes: highest") 
      elem.value = "Sort by likes: lowest";
  else elem.value = "Sort by likes";
}

function changeComments(){
  var elem = Document.getElementById("commentsButton");
  if (elem.value=="Sort by comments") 
      elem.value = "Sort by comments: most replies";
  if (elem.value=="Sort by comments: most replies") 
      elem.value = "Sort by comments: oldest";
  else elem.value = "Sort by comments";
}

document.getElementById("likesButton").addEventListener('click', changeLikes);
document.getElementById("commentsButton").addEventListener('click', changeComments);