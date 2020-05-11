// This is a JavaScript file
$(document).on('click', '#camera', function(){
  navigator.camera.getPicture(onSuccess, onFail, 
  { 
    quality: 100,
    destinationType: Camera.
    DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true
  });

  function onSuccess(imageURI) {
      var image = document.getElementById('imagem');
      image.src = imageURI;
  }

  function onFail(message) {
      alert('Failed because: ' + message);
  }
})

//notification e vibrate
$(document).on('click', '#alert', function(){
  navigator.notification.alert('you are the weiner', null, 'voce ganhou alguma coise ai', 'ok');
});


$(document).on('click', '#confirm', function(){
  function retorno(){
    if (retorno==1){
      navigator.notification.alert('confirm text', null, 'tu aperto b', 'ok');
    }
    else if (retorno==2){
      navigator.notification.alert('confirm text', null, 'tu aperto a', 'ok');
    }
  }
  navigator.notification.confirm('mensagem', retorno, 'titulo', ['b','a']);
});


$(document).on('click', '#beep', function(){
  navigator.notification.beep(3);
});


$(document).on('click', '#vibrate', function(){
  navigator.vibrate(450);
});

//geolocation
$(document).on('click','#local', function(){
  var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
  }
  function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
  }
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
});




