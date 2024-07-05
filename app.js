const questionsList = [
    { Q : "What is the correct HTML element for inserting a line break?",
        ans : ['<break>' , '<lb>', '<br>', '<ln>'],
        correct : '<br>'
    },
    { Q : "Which property is used to change the background color of an element?",
        ans : ['color' , 'background-color', 'bg-color', 'background'],
        correct : 'background-color'
    },
    { Q : "Which of the following is the correct way to create a function in JavaScript?",
        ans : ['function: myFunction()' , 'function myFunction()', 'create function myFunction()', 'def myFunction()'],
        correct : 'function myFunction()'
    },
    { Q : "Which HTML attribute is used to define inline styles?",
        ans : ['class' , 'style', 'font', 'styles'],
        correct : 'style'
    },
    { Q : "How can you add a comment in JavaScript?",
        ans : ['<!-- This is a comment -->' , '// This is a comment', '/* This is a comment */', '** This is a comment **'],
        correct : '// This is a comment'
    }
]


let startDiv = document.getElementById("start");
let startBut = document.getElementById("startButton");
let divCont = document.getElementById("divMain");
let inputEle = document.getElementById("input");




function changingThe(){
    let name = inputEle.value;
    divCont.removeChild(startDiv);

    let newDiv = document.createElement("div")
    newDiv.classList.add("div1");

    let questionContainer = document.createElement("div");
    let currentQuestionIndex = 0;
    let score = 0;
    let value = "";

    function displayQuestion() {
        questionContainer.innerHTML = ""; // Clear previous content

        const questionDiv = document.createElement("div1");

        const questionElement = document.createElement("p");
        questionElement.classList.add("qustion");
        questionElement.textContent = "Q" + (currentQuestionIndex + 1) + ": " + questionsList[currentQuestionIndex].Q;
        questionDiv.appendChild(questionElement);

    const optionsContainer = document.createElement("div");

    for (let i = 0; i < questionsList[currentQuestionIndex].ans.length; i++) {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option");
        optionButton.textContent = questionsList[currentQuestionIndex].ans[i];
        optionsContainer.appendChild(optionButton);
        optionButton.addEventListener("click", function correctAns(){
            value = optionButton.textContent;
            if (value === questionsList[currentQuestionIndex].correct){
                optionButton.classList.remove("option");
                optionButton.classList.add("correctOpt");
                score += 1;
            }
            else {
                optionButton.classList.remove("option");
                optionButton.classList.add("wrongOpt");
            }
            const allOptions = document.querySelectorAll(".option");
            for (const option of allOptions) {
                option.disabled = true;
            }
            
        });
    }

    questionDiv.appendChild(optionsContainer);

    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttt");

    const nextButton = document.createElement("button");
    nextButton.classList.add("next-button");
    nextButton.textContent = "Next Question";
    if (currentQuestionIndex === 4){
        nextButton.textContent = "Submit";
    }
    nextButton.addEventListener("click", handleNextQuestion);
    buttonDiv.appendChild(nextButton);
    questionDiv.appendChild(buttonDiv);


    questionContainer.appendChild(questionDiv);
    }

    function handleNextQuestion() {
    // Check if there are more questions
        if (currentQuestionIndex < questionsList.length - 1) {
            currentQuestionIndex++; // Move to the next question
            displayQuestion(); // Display the new question
        } else {
            // Handle the case when there are no more questions
            questionContainer.innerHTML = "";
            newDiv.classList.remove("div1");

            let val = document.createElement("h1");
            if (score > 3){
                val.textContent = "Congratulations! " + name + " You got " +  score + " out of 5.";
            }
            else {
                val.textContent = name + " You got " +  score + " out of 5.";
            }
            
            val.classList.add("head1");
            questionContainer.appendChild(val);
            // You can also add additional logic here, like showing a score or ending the quiz.
        }
    }


    displayQuestion(); 

    newDiv.appendChild(questionContainer);
    divCont.appendChild(newDiv);
}



startBut.addEventListener("click", changingThe);