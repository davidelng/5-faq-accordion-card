//select the answers containers and the orange box
const button = document.querySelectorAll('.question');
const box = document.querySelector('.card-box');

//on click toggle the class "open" on questions
//set the height of the answers from 0 to the max height of the content
button.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
        let collapse = item.nextElementSibling;
        if (item.classList.contains('open')) {
            collapse.style.maxHeight = collapse.scrollHeight + 'px';
        }
        else {
            collapse.style.maxHeight = null;
        }
    });
});

//move the box on hover
button.forEach((item) => {
    item.addEventListener('mouseover', () => {
        box.classList.toggle('box-open');
    })
    item.addEventListener('mouseout', () => {
        box.classList.remove('box-open');
    })
})

