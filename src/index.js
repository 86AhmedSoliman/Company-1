import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import './sass/style.scss';
import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function scrollFunction (){
    if(document.documentElement.scrollTop > 200){
        document.getElementById('navbar').classList.add('noTransparrent');
    } else {
        document.getElementById('navbar').classList.remove('noTransparrent');
    }
}
window.onscroll = function () {
    scrollFunction();
};
// form validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})();
document.getElementById('fullYear').innerHTML = new Date().getFullYear();