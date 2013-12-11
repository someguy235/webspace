var tags = {}

var elements = document.querySelectorAll(".tags span");
for(var i=0; i<elements.length; i++){
  var text = elements[i].innerHTML;
  if(typeof tags[text] === 'undefined'){
    tags[text] = 0
  }
  tags[text] += 1;
}

var tagsHtml = "";

for (var key in tags) {
  if (tags.hasOwnProperty(key)) {
    tagsHtml += "<span rel='"+ tags[key] +"'>"+ key +"</span> "
  }
}

document.getElementById("cloud").innerHTML = tagsHtml;

$.fn.tagcloud.defaults = {
  size: {start: 12, end: 18, unit: 'pt'},
  color: {start: '#333', end: '#33d'}
};

$(function () {
  $('#cloud span').tagcloud();
});
