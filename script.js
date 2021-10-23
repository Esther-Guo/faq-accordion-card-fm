const questionDivs = document.querySelectorAll('.question-board');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer')
let states = [0,0,0,0,0];

function displayAnswer() {
    const idx = Number(this.dataset.index);
    let questionDiv = questionDivs[idx];
    let answer = answers[idx];
    if (states[idx] == 0) {
        questionDiv.querySelector('.question').style.fontWeight = 'bold';
        questionDiv.querySelector('#arrow').style.transform = 'rotate(180deg)';
        answer.style.display = 'block';
        states[idx] = 1;
    }
    else {
        questionDiv.querySelector('.question').style.fontWeight = 'normal';
        questionDiv.querySelector('#arrow').style.transform = 'rotate(0deg)';
        answer.style.display = 'none';
        states[idx] = 0;
    }
}

questionDivs.forEach(item => item.addEventListener('click', displayAnswer));
questions.forEach(question => question.addEventListener('mouseover', (e) => {
    const idx = Number(e.target.dataset.index);
    let q = questions[idx];
    q.style.color = 'hsl(14, 88%, 65%)';
}));
questions.forEach(question => question.addEventListener('mouseout', (e) => {
    
    const idx = Number(e.target.dataset.index);
    let q = questions[idx];
    q.style.color = 'hsl(237, 12%, 33%)';
}));