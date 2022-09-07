// Youtube Ad Blocker
// Version: 1.0

setInterval(function() {
    var ad = document.querySelector("#player-ads");
    if (ad) {
        ad.remove();
    }
}, 1000);