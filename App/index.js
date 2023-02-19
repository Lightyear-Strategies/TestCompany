
import { link, stats, articles } from './variables.js'

// const { covLink} = require( './variables')

window.onload = function () {
    document.getElementById("cvgLink").setAttribute("onclick", `window.open('${link}', '_blank')`)
    document.getElementById("cvgStats").innerHTML = stats;
    document.getElementById("cvgArticles").innerHTML = articles;    
}


// function updateContent(stat, art) {
//     document.getElementById("cvgStats").innerHTML = stat;
//     document.getElementById("cvgArticles").innerHTML = art;    
// }


