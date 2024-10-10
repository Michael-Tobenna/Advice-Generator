document.getElementById('get-advice').addEventListener('click', generateAdvice);

function generateAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('advice').innerText = `"${data.slip.advice}"`;
        })
        .catch(error => {
            document.getElementById('advice').innerText = 'Failed to fetch advice. Try again!';
            console.error('Error fetching advice:', error);
        });
}
