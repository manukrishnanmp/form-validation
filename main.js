const scriptURL = 'https://script.google.com/macros/s/AKfycbzJB-HGLyUz8jDd0_-zXSGFWWGLhcrTuSNqmQit3_TjDOxQyoyS64opNco0C-OPWHta/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Your Message has been sent Successfully');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You for your Messsage!";
            setTimeout(function () {
                msg.innerHTML = '';
            }, 5000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
        });
});