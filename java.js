// window.alert("Salom,dunyo!") yoki faqat alert("salom!")
// const tasdiq = window.confirm("Davom etishni xohlaysizmi?");
// console.log(tastiq);true yoki false
// console.log(window.location.href);hozirgi url

// boshqa oyna yo tab ochish
// window.location.href= "https://google.com";

// yangi oyna yo tab ochish
// window.open("https://example.com","_blank");

// 3 soniyadan so'ng xabbar chiqadi
// window.setTimeout(() => {
//     console.log("3 soniya o'tdi");
    
// },3000);

// har 1 sekundda ishlaydi
// const intervaLId = window.setInterval(() => {
//     console.log("1 sekund o'tdi");
    
// },1000);

// to'xtatish uchun
// window.clearInterval(intervaLId);


// brauzerga oyna o'lchami
// console.log(window.innerWidth,window.innerHeight);


// brauzer oynasi o'zgarish ishlaydi
// window.addEventListener("resize",() =>{
//     console.log("Oyna o'lchami o'zgardi:");
//     console.log("Kenglik:",window.innerWidth);
//     console.log("Balandlik:",window.innerHeight);
// });

// window.setInterval(() => {
//     const vaqt = new Date().toLocaleTimeString();
//     console.log("hozirgi vaqt:",vaqt);
    
// },5000);

// console.log(window.navigator.userAgent);brauzer haqidagi malumot

// window.history.back();oldingi sahifa qaytadi
// window.history.forward();keyingi sahifaga o'tadi


// massivdagi malumot
// const ismlar = ["Ali","Vali","Hasan","Husan","Diyor"];

// // HTML dagi <ul> elementini tanlab olamiz
// const ulElement = document.querySelector("#ismListasi")

// // har bir ism uchun <li> yaratib, <ul> ga qo'shamiz
// ismlar.forEach((ism) =>{
//     const li = document.createElement("li");
//     li.textContent = ism;
//     ulElement.appendChild(li);
// });

// obyekt
const talaba = {
    ism:"Sayyorbek",
    yosh:21,
    kasb:"Frontend dasturchi",
    manzil:"Samarqand",
};

// HTML elementi tanlab olamiz
const ul = document.querySelector("#talabaInfo");

// object.entries orqali kalit-qiymat juftligi olamiz
Object.entries(talaba).forEach(([kalit,qiymat]) => {
    const li = document.createElement("li");
    li.textContent = `${kalit}: ${qiymat}`;
    ul.appendChild(li)
});