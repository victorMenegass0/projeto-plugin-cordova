// This is a JavaScript file

$(document).on('click', '#alertabtn', function(){
  navigator.notification.alert("ta dando certo por enquanto", null, "блять", "clicka ai");
});


$(document).on('click', '#confirmbtn', function(){
  function confirma(buttonIndex){
     if(buttonIndex==1){
       navigator.notification.alert("voce escolheu b", null, "блять", "clicka ai");
     }
     else if(buttonIndex==2){
       navigator.notification.alert("voce escolheu a", null, "блять", "clicka ai");
     }    
  }
  navigator.notification.confirm('escolha "a" ou "b"', confirma, "блять",['b', 'a']);
});

$(document).on('click', '#beepbtn', function(){
  navigator.notification.beep(3);
  navigator.vibrate(400);
});
$(document).on('click', '#vibratebtn', function(){
  navigator.vibrate(400);
});
