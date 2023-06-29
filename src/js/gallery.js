import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const awards = document.querySelectorAll('[data-fancybox="gallery"]');
for (var i = 0; i < awards.length; i++)
{
    var award = awards[i];
    var img = award.querySelector('img');
    award.setAttribute('data-src', img.getAttribute('src'));
}

Fancybox.bind('[data-fancybox="gallery"]', {

});