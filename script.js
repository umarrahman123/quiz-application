const questions = [
    {
        question: "which is largest animal in the world?",
        answers:[
            {text:"shark", correct: false},
            {text:"blue whale", correct: true},
            {text:"elephant", correct: false},
            {text:"giraffe", correct: false},
        ]
    },
    {
        question: "which is largest continent in the world?",
        answers:[
            {text:"Asia", correct: false},
            {text:"Gobi", correct: false},
            {text:"Sahara", correct: false},
            {text:"Antarctica", correct: true},
        ]
    },
    {
        question: "which is smallest continent in the world?",
        answers:[
            {text:"Asia", correct: false},
            {text:"Australia", correct: true},
            {text:"Arctic", correct: false},
            {text:"Africa", correct: false},
        ]
    },
    {
        question: "what is fullform of HTML?",
        answers:[
            {text:"Hyper text markup language", correct: true},
            {text:"cascading styele sheets", correct: false},
            {text:"Arctic", correct: false},
            {text:"Africa", correct: false},
        ]
    },
    {
        question: "what is fullform of CSS?",
        answers:[
            {text:"Hyper text markup language", correct: false},
            {text:"cascading style sheets", correct: true},
            {text:"Arctic", correct: false},
            {text:"Africa", correct: false},
        ]
    },
];

const questionElement = document.getElementById("quistion");
const answerButton = document.querySelector(".answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();



//                         neechy code me kuch masla hen!



// const questions = [
//     {
//         question: "which is larget animal in  the world?",
//         answers:[
//             {Text:"shark", correct: false},
//             {Text:"blue whaeel", correct: true},
//             {Text:"elephent", correct: false},
//             {Text:"girafee", correct: false},
            
//         ]
//     },
//     {
//         question: "which is larget continent in  the world?",
//         answers:[
//             {Text:"Asia", correct: false},
//             {Text:"Gobi", correct: false},
//             {Text:"sahara", correct: false},
//             {Text:"Antarctica", correct: true},
            
//         ]
//     },
//     {
//         question: "which is smalest continent in  the world?",
//         answers:[
//             {Text:"Asia", correct: false},
//             {Text:"austrelia", correct: true},
//             {Text:"Arctic", correct: false},
//             {Text:"africa", correct: false},
            
//         ]
//     },

// ];
// const questionElement = document.getElementById("question");
// const answerButton = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//  currentQuestionIndex = 0;
//  score = 0;
// nextButton.innerHTML = "Next";
// showQuestion();
// }

// function showQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
//     currentQuestion.answers.forEach(asnwer => {
//         const button = document.createElement("button");
//         button.innerHTML = asnwer.Text;
//         button.classList.add("btn");
//         answerButton.appendChild(button);
//         if(answers.correct){
//             button.dataset.correct = answers.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });
// }


// function resetState(){
//     nextButton.style.display = "none";
//     while(answerButton.firstChild){
//     answerButton.removeChild(answerButton.firstChild);

//     }
// }function selectAnswer(e){
//     const selectedBtn = e.target;
//     const iscorrect = selectedBtn.dataset.correct === "true";
//     if(iscorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButton.children).forEach(button =>{
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block"
// }

// function showScore(){
//     resetState();
//     questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML = "play Again";
//     nextButton.style.display = "block";
// }

// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
// }

// nextButton.addEventListener("click", ()=>{
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();
//     }else{
//         startQuiz();
//     }
// })




