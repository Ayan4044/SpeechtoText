$(document).ready(function(){
    var searchenabled=false;
    checkBrowser();
    $(this).addClass('pulse');
$(".btn-floating").click(function(){
    if(searchenabled)
    {
$(this).addClass('pulse');
voicesearch();
M.toast({
    html: "<strong><i class='far fa-check-circle'></i>Say Something!!</strong>",
    classes: ' success_toast '
  });
    }
});
function checkBrowser(){
if (navigator.userAgent.search("Chrome") >= 0){
  $(this).addClass('pulse');
    searchenabled=true;
    console.log({"status":searchenabled});
  //  voicesearch();
  enableSearch();
}
else{
    M.toast({
        html: "<strong><i class='far fa-check-circle'></i>Sorry!! Voice Search will not work in this browser </strong>",
        classes: ' error_toast '
      });
}

}

function enableSearch(){
  if(searchenabled)
  {
$('.btn-floating').addClass('pulse');
voicesearch();
M.toast({
  html: "<strong><i class='far fa-check-circle'></i>Say Something to search.</strong>",
  classes: ' success_toast '
});
  }
}

function voicesearch(){
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        
        var recognition = new webkitSpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function (e) {
          //document.getElementById('transcript').value = e.results[0][0].transcript;
          $("input:text").val(e.results[0][0].transcript);
          recognition.stop();
          $(".btn-floating").removeClass("pulse");
        
        };
        recognition.onerror = function(e) {
          recognition.stop();
          $(".btn-floating").removeClass("pulse");
        }
      }
      else{
        searchenabled=false;
        M.toast({
            html: "<strong><i class='far fa-check-circle'></i>Something went wrong!! </strong>",
            classes: ' error_toast '
          });
        }
      }


});
