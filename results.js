function displayResults() {
    const userId = localStorage.getItem('userId');
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
    const questions = [
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q1.png" // Image for the question
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q2.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q3.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q4.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q5.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q6.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q7.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q8.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q9.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q10.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q11.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q12.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q13.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q14.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q15.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q16.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q17.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q18.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q19.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q20.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q21.png" // chemistry
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q22.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q23.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q24.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q25.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q26.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q27.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q28.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q29.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q30.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q31.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q32.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q33.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q34.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q35.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q36.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q37.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q38.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q39.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q40.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q41.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q42.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q43.png" // Physics
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q44.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q45.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q46.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q47.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q48.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q49.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q50.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q51.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q52.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q53.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q54.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q55.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q56.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q57.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q58.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q59.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q60.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q61.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q62.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q63.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q64.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q65.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q66.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q67.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q68.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q69.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q70.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q71.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q72.png"
        },
        {
            options: ["a","b","c","d"], // zoology after structure
            answer: 3,
            image: "q73.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q74.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q75.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q76.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q77.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q78.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q79.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q80.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q81.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q82.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q83.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q84.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q85.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 2,
            image: "q86.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q87.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 0,
            image: "q88.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 1,
            image: "q89.png"
        },
        {
            options: ["a","b","c","d"],
            answer: 3,
            image: "q90.png"
        }
    ];

    if (!userId || !userAnswers) {
        alert("No quiz data found.");
        return;
    }

    let correctAnswers = 0;

    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            correctAnswers++;
        }
    });

    const resultsTable = document.getElementById('resultsTable');

    resultsTable.innerHTML = `
        <tr>
            <th>Username</th>
            <th>Score</th>
        </tr>
        <tr>
            <td>${userId}</td>
            <td>${correctAnswers} / ${questions.length}</td>
        </tr>
    `;
}

function goToLogin() {
    window.location.href = 'index.html';
}

// Display results when the page loads
window.onload = displayResults;
