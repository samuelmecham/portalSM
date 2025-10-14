const startBttn = document.getElementById("start-bttn")
const nextBttn = document.getElementById("next-bttn")
const questionContaner = document.getElementById("question-container")
const questionElement = document.getElementById('qustion')
const answerbttnElement = document.getElementById('ans-bttn')

let shuffeldQuestions, currentQuestionIndex

startBttn.addEventListener('click', startGame)

nextBttn.addEventListener('click', () => {
    currentQuestionIndex ++
    setNextQuestion()
} )



function startGame(){
    startBttn.classList.add('hide')
    shuffeldQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    questionContaner.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffeldQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.ans.forEach(ans => {
        const bttn = document.createElement('button')
        bttn.innerText = ans.text
        bttn.classList.add('bttn')
        if (ans.corect){
            bttn.dataset.corect = ans.corect
        }
        bttn.addEventListener('click', selectAnswer)
        answerbttnElement.appendChild(bttn)
    });
}

function resetState(){
    clearStatusClass(document.body)
    nextBttn.classList.add('hide')
    while(answerbttnElement.firstChild){
        answerbttnElement.removeChild(
            answerbttnElement.firstChild
        )
    }
}


function selectAnswer(e){
    
    const selectedBttn = e.target
    const corect = selectedBttn.dataset.corect
    setStatusClass(document.body, corect)
    Array.from(answerbttnElement.children).forEach(bttn => {
        
        setStatusClass(bttn , bttn.dataset.corect)
    })
    if (shuffeldQuestions.length > currentQuestionIndex +1){
            nextBttn.classList.remove('hide')
    }
    else{
        startBttn.innerText ="Restart"
        startBttn.classList.remove('hide')
    }

}


function setStatusClass(element, corect){
    
    clearStatusClass(element)
    if (corect){
        
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    console.log('clear')
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'what is 2 + 2',
        ans: [
            {text: '4', corect: true},
            {text: '22', corect: false},

        ]
    }
]
