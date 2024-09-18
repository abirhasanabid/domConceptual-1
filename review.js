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
    p.classList.add('text-red-600', 'text-3xl', 'font-bold');
    p.innerText = inputFild.value;
    const div = document.querySelector('#review');
    div.appendChild(p);
    inputFild.value = ''
})