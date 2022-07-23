//SOAL 9
/*

    Tulis code function promise di sini

*/

const myCountPromise = (num) => {
    return new Promise ((resolved, rejected) => {
        if (num === 2){
            setTimeout(() => {
                resolved(num * 2)
            }, 3000);
        } else {
            rejected("error")
        }
    })
}


//kode dibawah ini jangan dihapus atau diedit sama sekali ya


myCountPromise(2)
 .then((result) => {
    console.log(result)
 })
.catch((error) => {
    console.log(error)
})
