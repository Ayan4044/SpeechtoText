$(document).ready(function(){
    var searchenabled=false;
    checkBrowser();
$(".btn-floating").click(function(){
    if(searchenabled)
    {
$(this).addClass('pulse');
voicesearch();
    }
});
function checkBrowser(){
if (navigator.userAgent.search("Chrome") >= 0){
   
    searchenabled=true;
}
else{
    M.toast({
        html: "<strong><i class='far fa-check-circle'></i>Sorry!! Voice Search will not work in this browser </strong>",
        classes: ' error_toast '
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
            html: "<strong><i class='far fa-check-circle'></i>Sorry!! Browser doesn't support voice search </strong>",
            classes: ' error_toast '
          });
        }
      }


});
