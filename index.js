// script.js

let questions = [
	{
		prompt: `What is AngularJS?`,
		options: [
		    "A JavaScript framework",
		    "A programming language",
		    "A database system",
		    "A web browser",
		],
		answer: "A JavaScript framework",
	    },
	    {
		prompt: `Which directive is used to bind application data to HTML elements in AngularJS?`,
		options: [
		    "ng-model",
		    "ng-app",
		    "ng-controller",
		    "ng-bind",
		],
		answer: "ng-bind",
	    },
	    {
		prompt: `What does MVC stand for in the context of AngularJS?`,
		options: [
		    "Model-View-Component",
		    "Markup-View-Controller",
		    "Model-View-Controller",
		    "Markup-View-Component",
		],
		answer: "Model-View-Controller",
	    },
	    {
		prompt: `Which directive is used to initialize an AngularJS application?`,
		options: [
		    "ng-init",
		    "ng-app",
		    "ng-controller",
		    "ng-model",
		],
		answer: "ng-app",
	    },
	    {
		prompt: `What is the purpose of the "ng-model" directive in AngularJS?`,
		options: [
		    "To define a new module",
		    "To initialize an AngularJS application",
		    "To bind the value of an HTML element to a model variable",
		    "To control the scope of an application",
		],
		answer: "To bind the value of an HTML element to a model variable",
	    },
	    {
		prompt: `What does the "ng-repeat" directive do in AngularJS?`,
		options: [
		    "Binds an expression to the view",
		    "Initializes an AngularJS application",
		    "Defines a new controller",
		    "Iterates over a collection and duplicates a set of HTML elements",
		],
		answer: "Iterates over a collection and duplicates a set of HTML elements",
	    },
	    {
		prompt: `What is the purpose of the "ng-controller" directive in AngularJS?`,
		options: [
		    "To bind data to HTML elements",
		    "To define a controller for a view",
		    "To initialize an AngularJS application",
		    "To create a new module",
		],
		answer: "To define a controller for a view",
	    },
	    {
		prompt: `What is AngularJS module?`,
		options: [
		    "A collection of services, directives, controllers, filters, and configuration information",
		    "A type of HTML element",
		    "A programming language",
		    "A database system",
		],
		answer: "A collection of services, directives, controllers, filters, and configuration information",
	    },
	    {
		prompt: `What is the purpose of the "ng-click" directive in AngularJS?`,
		options: [
		    "To specify a function to be executed when an element is clicked",
		    "To define a new module",
		    "To initialize an AngularJS application",
		    "To control the scope of an application",
		],
		answer: "To specify a function to be executed when an element is clicked",
	    },
	    {
		prompt: `What does the "ng-show" directive do in AngularJS?`,
		options: [
		    "Hides an HTML element if a condition is true",
		    "Creates a new scope for an AngularJS application",
		    "Displays an HTML element if a condition is true",
		    "Binds data to an HTML element",
		],
		answer: "Displays an HTML element if a condition is true",
	    },
	    {
		prompt: `What is the purpose of the "ng-hide" directive in AngularJS?`,
		options: [
		    "Displays an HTML element if a condition is true",
		    "Creates a new scope for an AngularJS application",
		    "Binds data to an HTML element",
		    "Hides an HTML element if a condition is true",
		],
		answer: "Hides an HTML element if a condition is true",
	    },
	    {
		prompt: `What is the purpose of the "ng-disabled" directive in AngularJS?`,
		options: [
		    "Enables an HTML element if a condition is true",
		    "Creates a new scope for an AngularJS application",
		    "Disables an HTML element if a condition is true",
		    "Binds data to an HTML element",
		],
		answer: "Disables an HTML element if a condition is true",
	    },
	    {
		prompt: `What does the "ng-change" directive do in AngularJS?`,
		options: [
		    "Creates a new scope for an AngularJS application",
		    "Displays an HTML element if a condition is true",
		    "Executes a function when the value of an input element changes",
		    "Hides an HTML element if a condition is true",
		],
		answer: "Executes a function when the value of an input element changes",
	    },
	    {
		prompt: `What does the "ng-options" directive do in AngularJS?`,
		options: [
		    "Creates a new scope for an AngularJS application",
		    "Displays an HTML element if a condition is true",
		    "Populates a dropdown list with options",
		    "Hides an HTML element if a condition is true",
		],
		answer: "Populates a dropdown list with options",
	    },
	    {
		prompt: `What is the purpose of the "ng-submit" directive in AngularJS?`,
		options: [
		    "Creates a new scope for an AngularJS application",
		    "Displays an HTML element if a condition is true",
		    "Executes a function when a form is submitted",
		    "Hides an HTML element if a condition is true",
		],
		answer: "Executes a function when a form is submitted",
	    },
	    {
		prompt: `What does the "ng-view" directive do in AngularJS?`,
		options: [
		    "Creates a new scope for an AngularJS application",
		    "Displays an HTML element if a condition is true",
		    "Defines the placeholder for views to be rendered by AngularJS routes",
		    "Hides an HTML element if a condition is true",
		],
		answer: "Defines the placeholder for views to be rendered by AngularJS routes",
	    },
	    {
		prompt: `What is the purpose of the "ng-model-options" directive in AngularJS?`,
		options: [
		    "Creates a new scope for an AngularJS application",
		    "Displays an HTML element if a condition is true",
		    "To customize the behavior of ng-model directive",
		    "Hides an HTML element if a condition is true",
		],
		answer: "To customize the behavior of ng-model directive",
	    },
	    {
		prompt: `What is the purpose of the "ng-repeat" directive in AngularJS?`,
		options: [
		    "Binds an expression to the view",
		    "Iterates over a collection and duplicates a set of HTML elements",
		    "Initializes an AngularJS application",
		    "Defines a new controller",
		],
		answer: "Iterates over a collection and duplicates a set of HTML elements",
	    },
	    {
		prompt: `What does the "ng-show" directive do in AngularJS?`,
		options: [
		    "Displays an HTML element if a condition is true",
		    "Hides an HTML element if a condition is true",
		    "Creates a new scope for an AngularJS application",
		    "Binds data to an HTML element",
		],
		answer: "Displays an HTML element if a condition is true",
	    },
	    {
		prompt: `What is the purpose of the "ng-hide" directive in AngularJS?`,
		options: [
		    "Hides an HTML element if a condition is true",
		    "Displays an HTML element if a condition is true",
		    "Creates a new scope for an AngularJS application",
		    "Binds data to an HTML element",
		],
		answer: "Hides an HTML element if a condition is true",
	    },
	    {
		prompt: `What is the purpose of the "ng-disabled" directive in AngularJS?`,
		options: [		    
		    "Enables an HTML element if a condition is true",
		    "Creates a new scope for an AngularJS application",
		    "Disables an HTML element if a condition is true",
		    "Binds data to an HTML element",
		],
		answer: "Disables an HTML element if a condition is true",
	    },
	    {
		prompt: `What does the "ng-change" directive do in AngularJS?`,
		options: [
		    "Executes a function when the value of an input element changes",
		    "Creates a new scope for an AngularJS application",
		    "Displays an HTML element if a condition is true",
		    "Hides an HTML element if a condition is true",
		],
		answer: "Executes a function when the value of an input element changes",
	    }
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
