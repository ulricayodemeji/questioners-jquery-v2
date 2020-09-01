var questions = [{
    question: "What is the baby of a Moth known as?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3
},  {
    question: "What is the adult of a kid called",
    choices: ["calf", "doe", "goat", "chick"],
    correctAnswer: 2
},  {
    question: "What is the young of a Buffalo called",
    choices: ["calf", "baby", "pup", "cow"],
    correctAnswer: 0
},  {
    question: "What is a baby Aligator called",
    choices: ["baby", "gator", "hatching", "calf"],
    correctAnswer: 2
},  {
    question: "What is a baby Goose called",
    choices: ["gooser", "gosling", "gup", "pup"],
    correctAnswer: 1
},  {
    question: "What is a baby Hamster called",
    choices: ["pup", "chick", "infant", "billy"],
    correctAnswer: 0
},  {
    question: "What is a baby Hawk called",
    choices: ["hawklett", "pup", "larva", "eyas"],
    correctAnswer: 3
},  {
    question: "What is a baby grasshopper called",
    choices: ["kinga", "pup", "larva", "eyas"],
    correctAnswer: 1
},  {
    question: "What is a baby kangaroo called",
    choices: ["kinga", "pup", "larva", "eyas"],
    correctAnswer: 1
},  {
    question: "What is a baby whale called",
    choices: ["kinga", "pup", "larva", "eyas"],
    correctAnswer: 1
},  {
    question: "What is a baby Monkey called",
    choices: ["kinga", "pup", "larva", "eyas"],
    correctAnswer: 1
},  {
    question: "What is a baby Bear called",
    choices: ["kinga", "pup", "larva", "eyas"],
    correctAnswer: 1
}];

var currentQuestion = 0;
var correctAnswer = 0;
var quizOver = false;


$(document).ready(function() {
    displayCurrentQuestion();
    $(this).find("quizMessage").hide();
    $(this).find("nextButton").on("click", function (){
        if (!quizOver) {
            value = $("input[type='radio']:checked").val();
            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find("quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length){
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
         } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Qestion");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
         }
    });

});


function displayCurrentQuestion(){
    console.log("In display Current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    //Set the questionClass text to the Current Question
    $(questionClass).text(question);

    //Remove all current <li> element (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz (){
    currentQuestion= 0;
    currentAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswer + "out of:" + questions.length);
    $(document).find(".quizContainer > .result").show();
} 

function hideScore(){
    $(document).find(".result").hide();

}