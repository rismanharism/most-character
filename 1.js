let word = "aabcdefdfbgdfgdfffaxdrcfftvgybhunjimko,rcfrvtgybhu";
let tostr = word.toString();
let strlow = tostr.toLowerCase();
let jmlkar = 0;
let hurufb = ""
for (let i = 0; i < hasilkar.length; i++) {
    hitung = 0;
    for (let j = 0; j < hasilkar.length; j++) {
        if (hasilkar[i] === hasilkar[j]) {
            
            hitung++;
        }
        else {

         }
        if (jmlkar < hitung) {
            console.log(hitung + "  " + hasilkar[i]);
            hurufb = hasilkar[i];
            jmlkar = hitung;
        }
        else { 

        }
    }
}
if (strlow.length === 1) {
    console.log("Hanya memiliki satu karakter yaitu " + strlow);
}
else if (jmlkar >= 10) {
    console.log("Karakter terbanyak adalah " + hurufb + " dengan jumlah yang sangat banyak yaitu " + jmlkar);
}

else if (jmlkar > 5 && jmlkar < 10) {
    console.log("Karakter terbanyak adalah " + hurufb + " dengan jumlah yang cukup banyak yaitu " + jmlkar);
}
else if (jmlkar <= 5) {
    console.log("Karakter terbanyak adalah " + hurufb + " dengan jumlah " + jmlkar);
}
else {
    
 }
