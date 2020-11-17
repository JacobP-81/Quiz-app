/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which river runs through the Grand Canyon?',
      answers: [
        'Catawba River',
        'Mississippi River',
        'Pecos River',
        'Colorado River'
      ],
      correctAnswer: 'Colorado River'
    },
    {
      question: 'Which two South American countries do not share a land boundary with Brazil?',
      answers: [
        'Chile and Ecuador',
        'Chile and Colombia',
        'Peru and Bolivia',
        'Ecuador and Guatemala'
      ],
      correctAnswer: 'Chile and Ecuador'
    },
    {
      question: 'What is the capital of Tennessee?',
      answers: [
        'Memphis',
        'Johnson City',
        'Nashville',
        'knoxville'
      ],
      correctAnswer: 'Nashville'
    },
    {
      question: 'What US state is closest to Cuba?',
      answers: [
        'Georgia',
        'North Carolina',
        'Florida',
        'Texas'
      ],
      correctAnswer: 'Florida'
    },
    {
      question: 'Which US state is the third largest state by land area?',
      answers: [
        'California',
        'Texas',
        'Montana',
        'Alaska'
      ],
      correctAnswer: 'California'
    },
     ],

     
  quizStarted: false,
  questionNumber: 0,
  score: 0
};



function renderQuiz(){

}

function newAnswerSubmit(){

}



function generatemainPage(){
  questionNumber: 0,
};


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


function render(){
  if(store.quizStarted === false){
    html =  generateMainPage
  }


    $('main')
}














