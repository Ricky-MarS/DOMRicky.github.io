alert('Selamat Datang')

function cekinputan() {
    var nama = document.getElementById("nama").value;
    var divisi = document.getElementById("divisi").value;

    if (nama == "") {
        alert('Anda harus mengisi data dengan lengkap !');
    } else if (nama == "Ricky1137" && divisi == "Pasukan Pengintai") {
        alert('Berhasil Login')
        inputdata()
    } else {
        alert('Nama atau Divisi Salah !')
    }
}

function inputdata() {
    var nama = document.getElementById("nama").value;
    var divisi = document.getElementById("divisi").value;

    var tabel = document.getElementById("databel");
    var baris = tabel.insertRow(1);
    var kol1 = baris.insertCell(0);
    var kol2 = baris.insertCell(1);

    kol1.innerHTML = nama;
    kol2.innerHTML = divisi;
}

function hint() {
    alert("Nama: Ricky1137 || Divisi: Pasukan Pengintai")
}