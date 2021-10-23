const questions = document.querySelectorAll('.question-board');
const answers = document.querySelectorAll('.answer')
let states = [0,0,0,0,0];

function displayAnswer() {
    const idx = Number(this.dataset.index);
    let questionDiv = questions[idx];
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


questions.forEach(question => question.addEventListener('click', displayAnswer));