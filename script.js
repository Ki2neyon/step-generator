const button = document.getElementById('generate-button');
const stepList = document.getElementById('step-list');

button.addEventListener('click', () => {
    stepList.textContent = '';
    for(let i = 1; i <= 5; i++) {
        const li = document.createElement('li');
        li.textContent = `${i}. Step ${i}`;
        stepList.appendChild(li);
    }
});