
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
        mostramapa(position.coords.latitude, position.coords.longitude);
  }
  function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
  }
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

function mostramapa(lat, long){
  L.mapquest.key = 'olQeVCqeZD7qboPvqqqE7fpIruar4qUv';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 20
        });

        map.addControl(L.mapquest.control());
}



