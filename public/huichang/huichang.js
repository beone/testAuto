$(document).ready(function(){
  updatePageHeight();
  function updatePageHeight() {
    var frame = document.getElementById('testFrame'),
      body = document.body;

    // 获取高度
    var pageHeight = body.scrollHeight
    frame.style.height = (pageHeight-20)+"px";
    //frame.setAttribute('height', pageHeight);
  }
});