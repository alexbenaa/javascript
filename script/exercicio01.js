function load() {
      var $MsgHour = document.querySelector('#hours')
      var $ImgCenter = document.querySelector('img')
      var $Date = new Date()
       var $Hour = $Date.getHours()
      $MsgHour.innerHTML = `Agora são ${$Hour} hrs.`
      if ($Hour >= 0 && $Hour < 12) {
            // Bom dia  !
            $ImgCenter.src = '/assets/photo_morning.png'
            document.body.style.background = '#fe9967'

      }else if ($Hour >= 12 && $Hour < 18) {
            // Boa tarde
            $ImgCenter.src = '/assets/tarde.png'
            document.body.style.background = '#423137'
      }else{
            // Boa Noite
            $ImgCenter.src = '/assets/noite.png'
            document.body.style.background = '#3c1b52'
      }
}