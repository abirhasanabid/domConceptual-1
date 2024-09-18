let sum = 0;
document.getElementById('plus-btn').addEventListener('click', function () {
    const countNumber = document.getElementById('count');
    sum += 1;
    countNumber.innerText = sum;
})
document.getElementById('minus-btn').addEventListener('click', function () {
    const countNumber = document.getElementById('count');
    sum -=1;
    countNumber.innerText = sum;
})