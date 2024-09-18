document.getElementById('submit-btn').addEventListener('click', function () {
    //    const inputFild = document.getElementById('text-area');
    //    const valueOfTextArea = inputFild.value;
    //    const review = document.getElementById('user-review2');
    //    const reviewInnerText = review.innerText;
    //    review.innerText=inputFild.value;
    //    inputFild.value=''

    const inputFild = document.getElementById('text-area');
    const inputFildValue = inputFild.value;
    const p = document.createElement('p');
    p.innerText = inputFild.value;
    p.style.color = 'red';
    p.style.fontSize='40px';
    p.style.fontWeight='bold'
    const div = document.querySelector('#review');
    div.appendChild(p);
    inputFild.value=''
})