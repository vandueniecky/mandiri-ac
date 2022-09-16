// paralax jumbotron
$ (window).scroll(function(){

    // navbar transparant to color on scrollTop
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 700);

});


// click trigger
$('.scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});

$('button.navbar-toggler').click(function() {
    $('.navbar').addClass('scrolled');
});

// admin.html javascript
const scriptURL = 'https://script.google.com/macros/s/AKfycbwkHxk5f20_Uf7L29IIOkW2YEPxJSC9rHivikXjNdAtMGsbFSH5rmsOztWJRuK1kkne/exec'
const form = document.forms['aplikasi-input-data'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

// Contact
const forms = document.getElementById('form');
const username = document.getElementById('username');
const alamat = document.getElementById('alamat');
const subjek = document.getElementById('subjek');
const merk = document.getElementById('merk');
const pk = document.getElementById('pk');
const harga = document.getElementById('harga');
const kontak = document.getElementById('kontak');
const pekerja = document.getElementById('pekerja');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // ketika tombol sumbit diklik
    // tampilkan tombol loading dan hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // setelah tombol sumbit diklik
            // tampilkan tombol kirim dan hilangkan loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert pesan success 
            myAlert.classList.toggle('d-none');
            // reset form nya
            form.reset();
         })
         .catch(error => console.error('Error!', error.message))
});

form.addEventListener('keyup', (e) => {

    checkInputs();
    function checkInputs() {
      const usernameValue = username.value.trim();
      const alamatValue = alamat.value.trim();
      const merkValue = merk.value.trim();
      const hargaValue = harga.value.trim();
      const pekerjaValue = pekerja.value.trim();
  
  
          if(usernameValue === '') {
              setErrorFor(username, 'Name cannot be blank');
          } else {
              setSuccessFor(username);
          }
  
          if(alamatValue === '') {
              setErrorFor(alamat, 'alamat cannot be blank');
          } else {
              setSuccessFor(alamat);
          }
  
          if(merkValue === '') {
              setErrorFor(merk, 'This cannot be blank');
          } else {
              setSuccessFor(merk);
          }
          
          if(hargaValue === '') {
            setErrorFor(harga, 'This cannot be blank')
          } else {
            setSuccessFor(harga);
          }

          if(pekerjaValue === '') {
            setErrorFor(pekerja, 'This cannot be blank')
          } else {
            setSuccessFor(pekerja);
          }
  
      }
  
      
      function setErrorFor(input, message) {
          const formControl = input.parentElement;
          const small = formControl.querySelector('small');
  
          small.innerText = message;
          formControl.className = 'control-form error';
      }
  
      function setSuccessFor(input, message) {
          const formControl = input.parentElement;
          const small = formControl.querySelector('small');
  
          small.innerText = message;
          formControl.className = 'control-form success';
      }
  
  });

//   end admin.html javascript