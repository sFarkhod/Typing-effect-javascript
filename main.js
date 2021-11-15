 const texts = ['developer', 'student', 'researcher'];// Birinchi navbatda so'zlarimiz jamlangan massiv yaratib olamiz
 let count = 0;//har bitta so'zni chek qilishimiz uchun variable
 let index = 0;//har bitta indexni aniqlab olishimiz uchun variable
 let selectedText = '';//belgilab olingan string qiymatidagi so'zni o'ziga olishi uchun variable
 let letter = '';//har bitta letterni o'ziga olishi uchun variable

(function type() { // funksiya boshida qo'yilgan qavslar funksiyani invoke (chaqirib) tezroq beradi.
    if(count === texts.length) { //agar count o'zgaruvchimiz texts massivini uzunligiga teng bo'lsa countni yana 0 ga qaytaramiz
        count = 0;
    }
    selectedText = texts[count] //tanlangan so'zlar (selectedText) uchun ochgan variablemizni texts massivimizdagi har bitta so'zga teng qilib chiqamiz
    letter = selectedText.slice(0, ++index) //tanlagan letterlarimizga har bitta letterni alohida massiv holida qo'shamiz

    document.querySelector('.typing').textContent = letter; // html ga qo'shish bo'ldi
    if(letter.length === selectedText.length){   //letterni uzunligi biz tanlagan so'zni uzunligiga teng bo'lsa keyingi so'zga o'tishini taminlaymiz
        count++
        index = 0;
    }

    setTimeout(type, 400);

} ());



    

 

