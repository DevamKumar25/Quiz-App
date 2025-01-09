
document.addEventListener('DOMContentLoaded', () => {  
           const startBtn =  document.getElementById('start-btn');
           const nextBtn = document.getElementById('next-btn');
           const restartBtn = document.getElementById('restart-btn');
           const quizContainer = document.getElementById('quiz-container');
           const questionContainer = document.getElementById('question-container');
           const questionText = document.getElementById('question-text');
           const choiceList = document.getElementById('choice-list');
           const resultContainer = document.getElementById('result-container');
           const scoreDisplay = document.getElementById('score');

           const questions = [
            {
                question: "What is the main purpose of encapsulation in OOP?",
                choices: [
                    "To allow multiple classes to inherit from a single class",
                    "To hide the internal state of an object and require all interaction to be performed through an object's methods",
                    "To enable polymorphism",
                    "To simplify complex systems by breaking them into smaller parts"
                ],
                answer: "To hide the internal state of an object and require all interaction to be performed through an object's methods",
            },
            {
                question: "Which of the following best describes inheritance?",
                choices: [
                    "The ability to create new classes based on existing classes",
                    "The process of hiding implementation details from the user",
                    "The capability of different classes to be treated as instances of the same class through a common interface",
                    "The method of combining data and behavior into a single unit"
                ],
                answer: "The ability to create new classes based on existing classes",
            },
            {
                question: "What does polymorphism allow in OOP?",
                choices: [
                    "Objects to have multiple forms or behaviors depending on their context",
                    "Data hiding within a class",
                    "Creating new classes from existing ones",
                    "Combining different objects into a single unit"
                ],
                answer: "Objects to have multiple forms or behaviors depending on their context",
            },
            {
                question: "What is an abstract class?",
                choices: [
                    "A class that cannot be instantiated and is used as a base for other classes",
                    "A class that contains only static methods",
                    "A class that has no properties or methods",
                    "A class that can be instantiated directly"
                ],
                answer: "A class that cannot be instantiated and is used as a base for other classes",
            },
            {
                question: "What is method overloading?",
                choices: [
                    "Defining multiple methods with the same name but different parameters within the same class",
                    "Overriding a method in a subclass with the same name and parameters as in the parent class",
                    "Creating methods that perform different tasks based on their names",
                    "Combining multiple methods into one"
                ],
                answer: "Defining multiple methods with the same name but different parameters within the same class",
            },
            {
                question: "What is the purpose of a constructor in OOP?",
                choices: [
                    "To initialize an object when it is created",
                    "To destroy an object when it is no longer needed",
                    "To define properties of a class",
                    "To provide default values for methods"
                ],
                answer: "To initialize an object when it is created",
            },
            {
                question: "Which of the following is NOT a principle of OOP?",
                choices: [
                    "Encapsulation",
                    "Inheritance",
                    "Polymorphism",
                    "Compilation"
                ],
                answer: "Compilation",
            },
            {
                question: "What does 'this' refer to in an object method?",
                choices: [
                    "The current instance of the object where the method is called",
                    "The parent class of the object",
                    "A global variable in JavaScript",
                    "The prototype of the object"
                ],
                answer: "The current instance of the object where the method is called",
            },
            {
                question: "What is an interface in OOP?",
                choices: [
                    "A contract that defines what methods a class must implement without providing their implementation",
                    "A way to inherit properties from multiple classes",
                    "A type of abstract class that can be instantiated directly",
                    "A mechanism for data hiding"
                ],
                answer: "A contract that defines what methods a class must implement without providing their implementation",
            },
            {
                question: "What does 'overriding' mean in OOP?",
                choices: [
                    "Providing a new implementation for an inherited method in a subclass.",
                    "Creating multiple versions of a method with different signatures.",
                    "'Hiding' a method from being accessed outside its class.",
                    "'Combining' two or more methods into one."
                ],
                answer: "Providing a new implementation for an inherited method in a subclass.",
            },
            {
                question: "Which design pattern restricts instantiation of a class to one single instance?",
                choices: [
                    "Factory Pattern",
                    "Singleton Pattern",
                    "Observer Pattern",
                    "Decorator Pattern"
                ],
                answer: "Singleton Pattern",
            }
        ];
        

           let currentQuestionIndex = 0;
           let score = 0;

           startBtn.addEventListener("click" , startQuiz);

           nextBtn.addEventListener('click',() => {
            currentQuestionIndex++;
            if(currentQuestionIndex < questions.length){
                showQuestion();
            }
            else{
                showResult();
            }
           })


           restartBtn.addEventListener('click', () => {
            currentQuestionIndex =0;
            score =0;
            resultContainer.classList.add('hidden');
            startQuiz();
           })

           function startQuiz(){
            startBtn.classList.add('hidden');   // to remove the start button
            resultContainer.classList.add('hidden');
            questionContainer.classList.remove('hidden');
            showQuestion();
           }



           function showQuestion() {
            // when question came , the 'nextBtn' is hide
            nextBtn.classList.add('hidden');
            questionText.textContent = questions[currentQuestionIndex].question;
            choiceList.innerHTML = "";  // clear the previous choices
            questions[currentQuestionIndex].choices.forEach(choice => {
                const li = document.createElement('li');
                li.textContent = choice;
                li.addEventListener("click" , () => selectAnswer(choice)); // we use callback here , because we want to not run immediately
                choiceList.appendChild(li);
            });
           
           }


           function selectAnswer(choice) {
            const correctAnswer = questions[currentQuestionIndex].answer;
            if(correctAnswer===choice){
                score++;
            }
            nextBtn.classList.remove('hidden');
           }


           function showResult() {
            questionContainer.classList.add('hidden');
            resultContainer.classList.remove('hidden');
            
            // Correctly display the score without an extra semicolon
            scoreDisplay.textContent = `${score} out of ${questions.length}`;
        }
        
        });
    