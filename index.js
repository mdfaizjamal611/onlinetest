document.getElementById('candidateLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('candidate-error-message');

    // Replace these with your actual candidate login credentials
    const validUsers = {
        'asjad2007': 'asjad2007@',
        'arifa611': 'arifa611@',
        'candidate3': 'password3',
        'candidate4': 'password4',
        'candidate5': 'password5'
    };

    if (validUsers[userId] && validUsers[userId] === password) {
        // Store userId in localStorage
        localStorage.setItem('userId', userId);
        
        alert(`Important Information:
        1) Total 90 questions and time limit is 120 minutes.
        2)*If you minimize this page more than 3 times your test will be submitted automatically.*
        3) The arrangement of questions is: Botany, then Chemistry, then Physics, then Zoology.
        4) Write down options serial-wise in your copy for crosschecking.
        5) For any technical issue, call on 7352268596.`);


        // Redirect to the quiz page
        window.location.href = 'quiz.html';
    } else {
        errorMessage.textContent = 'Incorrect ID or password. Please try again.';
    }
});

document.getElementById('authorityLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const authorityId = document.getElementById('authorityId').value;
    const authorityPassword = document.getElementById('authorityPassword').value;
    const errorMessage = document.getElementById('authority-error-message');

    // Replace these with your actual authority login credentials
    const correctAuthorityId = 'admin';
    const correctAuthorityPassword = 'faiz778386';

    if (authorityId === correctAuthorityId && authorityPassword === correctAuthorityPassword) {
        // Redirect to the results page
        window.location.href = 'results.html';
    } else {
        errorMessage.textContent = 'Incorrect ID or password. Please try again.';
    }
});