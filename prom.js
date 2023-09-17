// 5)
// //что такое Promise?

//promise это обьект в javaScript который как бы обещает нам что выполнится в будющем

// 6)
// //создайте Promise функцию?

let myPromise = new Promise(function(myResolve, myReject){
    myResolve();
    myReject();
});

myPromise.then(
    function(value) {},
    function(error) {}
);econds();

// 7)
// //обьясни своими словами, что такое res и rej?
// let count = new Promise(function(res, rej) {
//     let a = 4;
//     if (a > 3) {
//         res('Число подходит');
//     } else {
//         rej('Число неподходит');
//     }

//     count.then (
//         function(value) {console.log(value);},
//         function(error) {console.log(error);}
//     );
// });

//это функции, которые передаются в Promise. res вызывается когда операция успешна а rej когда проваленна

// 8)
// //обьясни своими словами, что такое .then?
// let count = new Promise(function(res, rej) {
//     let a = 4;
//     if (a > 3) {
//         res('Число подходит');
//     } else {
//         rej('Число неподходит');
//     }

//     count.then (
//         function(value) {console.log(value);},
//         function(error) {console.log(error);}
//     );
// });

//он указывает что нужно сделать после успешного выполнения промиса или после ошибки


// 11)
// //что делает async?

//Функции объявленные с async возвращают промис и могут содержать операции

// 12)
// //что делает await?

//он приостанавливает выполнение функций пока промис не завершится и не вернет результат