function toggleMenu() {
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector(".hamburger-icon");
menu.classList.toggle("open");
icon.classList.toggle("open");
}

function fiyathesapla() {
    var sitesekli = document.getElementById("sitesekli").value;
    var teslimsuresi = parseInt(document.getElementById("teslimsuresi").value);
    var tabanfiyat;

    if (sitesekli == "esatis") {
        tabanfiyat = 1500; /* E ticaret taban fiyatı */
    } else if (sitesekli == "blog") {
        tabanfiyat = 1000; /* Blog taban fiyatı */
    }

    /* Fiyat aralıkları */
    var ekfiyat = 0;
    if (teslimsuresi < 4) {
        ekfiyat = 900;
    } else if (teslimsuresi < 7) {
        ekfiyat = 600;
    }
    else if (teslimsuresi < 12){
        ekfiyat = 500
    }
    else if (teslimsuresi < 16){
        ekfiyat = 400
    }
    else if (teslimsuresi < 20){
        ekfiyat = 300
    }
    else if (teslimsuresi <25){
        ekfiyat = 200
    }

 /* Toplam fiyat hesabı */
    var toplamfiyat = tabanfiyat + ekfiyat;

    /* Sonucu göster */
    var sonucElement = document.getElementById("sonuc");
    sonucElement.innerHTML = "Hesaplanan Ücret: " + toplamfiyat +"₺";

    /* Borderı aç */
    sonucElement.classList.add("bordergoster");}