(function(){
    function buildQuiz(){
        const output = [];

        questions.forEach((currentQuestion, questionNumber) => {

            const answers = [];
    
            for(letter in currentQuestion.answers){
                answers.push('input.form-control(type=\'radio\', name=\'q'+ i + '\', value=\'' + letter + '\')\n label(for \'' + letter + '\')' + questions[questionNums[i]].answers[letter]);
            }

            
            output.push('div (class="question")' + questions[questionNums[i].question + '\n div (class="answers")' + answers.join(''));
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults(){
    
        const answerContainers = quizContainer.querySelectorAll('

        var userAnswer = '';
        var aCount = 0;
        var bCount = 0;
        var cCount = 0;
        var dCount = 0;

        for(var i=0; i < questionNums.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer == 'a'){
                aCount++;
            }else if (userAnswer == 'b'){
                bCount++;
            }else if (userAnswer == 'c'){
                cCount++;
            }else if (userAnswer == 'd'){

            }

        }

        let winner = Math.max(aCount, bCount, cCount, dCount);

        if(winner == aCount){
            resultsContainer.innerHTML = 'You are most like Becca!';
        }else if (winner == bCount){
            resultsContainer.innerHTML = 'You are most like Bridget!';
        }else if (winner == cCount){
            resultsContainer.innerHTML = 'You are most like Lily!';
        }else if (winner == dCount){
            resultsContainer.innerHTML = 'You are most like Dom!';
        }
    }   
            
    const  quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
                
    const questions = [
        {
            question: "What is your favorite dog?",
            answers: {
                a: 'I\'m a cat person'
                b: 'My dog'
                c: 'Any dog that will let me pet it'
                d: 'Beagles'
            }
        },
        {
            question: "What dorm do you live in",
            answers: {
                a: 'Off-campus'
                b: 'Cav'
                c: 'PE'
                d: 'Siggy, baby'
            }
        },
        {
            question: "What is your favorite food to have on campus?",
            answers: {
                a: 'Smashburger'
                b: 'Starbucks'
                c: 'Modern Market'
                d: 'Subway'
            }
        },
        {
            question: "What is your favorite ND tradition?",
            answers: {
                a: 'ND Day'
                b: 'Keenan Revue'
                c: 'The Meritocracy'
                d: 'Football Games'
            }
        },
        {
            question: "What is your favorite Taylor Swift song?",
            answers: {
                a: 'Paper Rings'
                b: 'Picture to Burn'
                c: 'London Boy'
                d: 'I Knew You Were Trouble'
            }
        }];


    buildQuiz();

    submitButton.addEventListener('click', showResults);

})();
