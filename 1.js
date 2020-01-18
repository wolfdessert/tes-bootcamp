function pendapatan(uang, bunga) {
    console.log("bunga dalam 1 bulan adalah " + sebulan(uang, bunga));
    return setahun(uang, bunga);
}

function sebulan(uang1, bunga1) {
    var uSebulan = Math.floor((uang1 * bunga1) + uang1);
    return uSebulan;
}

function setahun(uang2, bunga2) {
    var uSetahun = Math.floor(((uang2 * bunga2) * 12) + uang2);
    return uSetahun;
}

console.log("jadi dalam 12 bulan pendapatan yang ada adalah " + pendapatan(3000000, 0.025));