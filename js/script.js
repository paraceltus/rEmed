$(document).ready(function(){
      $('a').on('click', function(evt){ // au clic sur un lien
            evt.preventDefault(); // bloquer le comportement par défaut: on ne rechargera pas la page
            var target = $(this).attr('href'); // enregistre la valeur de l'attribut  href dans la variable target
            $('html, body') // le sélecteur $(html, body) permet de corriger un bug sur chrome et safari (webkit)
            .stop() // on arrête toutes les animations en cours 
            .animate({scrollTop: $(target).offset().top}, 1000 ); // on fait maintenant l'animation vers le haut (scrollTop) vers notre ancre target
      });
});