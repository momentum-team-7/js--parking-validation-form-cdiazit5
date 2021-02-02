console.log('Add validation!');
const form = document.getElementById('parking-form')
const carYear = document.querySelectorAll('car-year')
const numberDays = document.getElementById('days')


// form.addEventListener('submit', (event) => {
//     function ()

// });
// // Car year must be after 1900

form.addEventListener('submit', function(e) {
    e.preventDefault();

    alert('SUBMITTED');
});