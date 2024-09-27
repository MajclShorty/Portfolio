$(function(){

   $('.skryj').on('click', function(){
      var cas = 350;
      $('sidebar').stop(true, true).toggleClass('aktivni', cas, "easeInExpo");
      $('main').stop(true, true).toggleClass('aktivni', cas, "easeInExpo");
   });

   $('.skryj i').on('click', function(){
      $('.skryj i').each(function(){
         $(this).toggleClass('aktivni');
      });
   });
});

function nactiObsah(soubor) {
   var xhr = new XMLHttpRequest();
   xhr.open('GET', soubor, true);
   xhr.onreadystatechange = function () {
       if (xhr.readyState == 4 && xhr.status == 200) {
           document.querySelector('.clanky').innerHTML = xhr.responseText;

           if (soubor === "pages/zkusenosti.html") {
            vytvorGraf();  // Voláme funkci pro vykreslení grafu
        }
       }
   };
   xhr.send();
}

  // Načte obsah "Úvod" při načtení stránky
  window.onload = function() {
   nactiObsah("pages/uvod.html");
};

