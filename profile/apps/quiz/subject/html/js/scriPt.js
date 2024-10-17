//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 31;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "What is the purpose of the HTML tag?",
    options: ["To define metadata about an HTML document", "To insert media files", "To create hyperlinks", "To define a list"],
    correct: "To define metadata about an HTML document",
  },
  {
    id: "1",
    question: "What is the correct HTML for adding a background color to a page?",
    options: ['Tag: bg color=" "','Tag: background color=" "','Tag: color', 'Tag: body style="background-color : "'],
    correct: 'Tag: body style="background-color:" "',
  },
  {
    id: "2",
    question: "Which HTML tag is used to define a footer in a web page?",
    options: ["Tag: foot", "Tag: footer", "Tag: bottom", "Tag: end"],
    correct: "Tag: footer",
  },
  {
    id: "3",
    question: "Which HTML tag is used to define the main content of a web page?",
    options: ["Tag: content", "Tag: article", "Tag: main", "Tag: section"],
    correct: "Tag: main",    
  },
  {
    id: "4",
    question: "Which tag is used to define a paragraph in HTML?",
    options: ["Text", "Para", "P", "Paragraph"],
    correct: "P",    
  },
  {
    id: "5",
    question: "What is the correct HTML tag for the largest heading?",
    options: ["Heading", "H6", "H1", "Heading6"],
    correct: "H1",    
  },
  {
    id: "6",
    question: 'What does the "alt" attribute in the  tag specify?',
    options: ["Altitude of the image", "Alternative text for an image", "Alignment of the image", "Alternate source for the image"],
    correct: "Alternative text for an image",    
  },
  {
    id: "7",
    question: "What is the correct HTML for inserting an image?",
    options: ['img href="image.jpg" alt="Image"', 'image src="image.jpg" alt="Image"', 'img src="image.jpg" alt="Image"', 'picture src="image.jpg" alt="Image"'],
    correct: 'img src="image.jpg" alt="Image"',
  },
  // {
  //   id: "8",
  //   question: "What is the correct HTML for creating a hyperlink to another website?",
  //   options: ["Link", "http://www.example.com", "Link", '<a href="http://www.example.com">Link</a>'],
  //   correct: '<a href="http://www.example.com">Link</a>',  
  // },
  {
    id: "9",
    question: "Which attribute is used to define inline styles in HTML?",
    options: ["style", "class", "id", "format"],
    correct: "style",    
  },
  {
    id: "10",
    question: "Which tag is used to define a table row in HTML?",
    options: ['TH tag', 'TR tag', 'TABLE tag', 'TH tag'],
    correct: 'TR tag',    
  },
  {
    id: "11",
    question: "Which tag is used to define a hyperlink in HTML?",
    options: ["Tag: link", "Tag: href", 'Tag: a href=" "', "Tag: hyperlink"],
    correct: 'Tag: a href=" "',    
  },
  {
    id: "12",
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["Tag: br", "Tag: hyperlink", "Tag: linebreak", "Tag: lb"],
    correct: "Tag: br",    
  },
  
  {
    id: "13",
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Markup Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correct: "Hyper Text Markup Language",    
  },
  {
    id: "14",
    question: "Which tag is used to define an unordered list <.....> in HTML?",
    options: ["ul", "li", "dl", "ol"],
    correct: "ul",    
  },
  {
    id: "15",
    question: "In html _______ tag defines paragraph.",
    options: ["p tag", "para tag", "table tag", "section tag"],
    correct: "p tag",    
  },
  {
    id: "16",
    question: "What is Default extension for a HTML document?",
    options: [".htm", ".html", "both", "none"],
    correct: "both",    
  },
  {
    id: "17",
    question: "HTML tag begins with______ symbol.",
    options: ["Gratter than(>)", "Less than(<)", "&lt;!", "!&gt;"],
    correct: "Less than(<)",    
  },
  {
    id: "18",
    question: "HTML tag ends with _____symbol.",
    options: ["Gratter than(>)", "Less than(<)", "&lt;!", "!&gt;"],
    correct: "Gratter than(>)",    
  },
  {
    id: "19",
    question: "HTML comment begins with_____ symbol.",
    options: ["Gratter than(>)", "Less than(<)", "&lt;!", "!&gt;"],
    correct: "Less than(<)",    
  },
  {
    id: "20",
    question: "Which input type defines a slide control?",
    options: ["range", "slider", "search", "controls"],
    correct: "range",    
  },
  {
    id: "21",
    question: "Which browser does the HTML5 suports?",
    options: ["Firefox", "Safari", "Internet", "All the mentioned above"],
    correct: "All the mentioned above",    
  },
  {
    id: "22",
    question: "_______is the replacement for coocking in HTML5.",
    options: ["Java scriipts", "Web Server", "Local storage", "All of the above"],
    correct: "Local storage",    
  },{
    id: "23",
    question: "The tags elements in XML are ________.",
    options: ["case insensitive", "case sensitive", "browser dependent", "ALl of the above"],
    correct: "case sensitive",    
  },{
    id: "24",
    question: "The tags elements in HTML are ________.",
    options: ["case insensitive", "case sensitive", "browser dependent", "All of the above"],
    correct: "case insensitive",    
  },{
    id: "25",
    question: "Which of the following tag <...> is used to define in a drop-down selection list",
    options: ["select tag", "list tag", "option tag", "dropdown"],
    correct: "option tag",    
  },{
    id: "26",
    question: "Which of the following tag <...> is used to create in a drop-down selection list",
    options: ["select tag", "list tag", "option tag", "dropdown"],
    correct: "select tag",   
  },{
    id: "27",
    question: "Which of the following is not a HTML5 tag.",
    options: ["source", "video", "p", "slider"],
    correct: "slider",    
  },{
    id: "28",
    question: "In which year HTML was first propsed.",
    options: ["1989", "1990", "2010", "2000"],
    correct: "1990",    
  },{
    id: "29",
    question: "Which of the following element is used for styling HTML5 layout?",
    options: ["CSS", "jQuery", "PHP", "SQL"],
    correct: "CSS",    
  },{
    id: "30",
    question: "How can you open a link in its own unique new window?",
    options: ['TARGET="_NEW_WINDOW"', 'TARGET="NEW"', 'TARGET=" _BLANK"', 'None'],
    correct: 'TARGET=" _BLANK"',    
  },
  {
    id: "31",
    question: "In which part of the HTML metadata is contained?",
    options: ["head tag", "title tag", "html tag", "body tag"],
    correct: "head tag",    
  },
  {
    id: "32",
    question: "Which of the following will not be found in the 'head' section?",
    options: ["Table", "Metatags", "Title", "None of these"],
    correct: "Table",    
  },{
    id: "33",
    question: "If you create an HTML page in word processor _____.",
    options: ["Save it with binary file", "Save it with ASCII text file", "All of these ", "Save it with WMF file"],
    correct: "Save it with ASCII text file",    
  },{
    id: "34",
    question: "Which property tells how many rows a cell should span?",
    options: ["rowspan=n", "colspan=n", "None", "Both"],
    correct: "rowspan=n",    
  },{
    id: "35",
    question: "The attribute used choose the type of font in HTML is?",
    options: ["Character", "Face", "Text-type", "All of these"],
    correct: "Face",    
  },
  {
    id: "36",
    question: "All HTML documents will be basically_______",
    options: ["Text", "Pictures", "None", "Graphs"],
    correct: "Text",    
  },
  {
    id: "37",
    question: "HTML supports _____.",
    options: ["Ordered list", "Unordered list", "Both, Ordered list & Unordered list", "Does not support those types"],
    correct: "Both, Ordered list & Unordered list",    
  },
  {
    id: "38",
    question: "How many heading tags are supported by HTML?",
    options: ["3", "4", "5", "6"],
    correct: "6",    
  },
  {
    id: "39",
    question: "What is tag tt tag in html ",
    options: ["It renders fonts as teletype text font style", " It renders fonts as truetype text font style", "It renders fonts as truncate text font style ", "All the above"],
    correct: "It renders fonts as teletype text font style",    
  },
  {
    id: "40",
    question: "HTML is used to create _______.",
    options: ["Database", "Web page", "Word document", "Web serve"],
    correct: "Web page",    
  },
  {
    id: "41",
    question: "All normal webpages consists of ______.",
    options: ["Head and Body", "None of these", "Body and frameset", "Top and bottom"],
    correct: "Head and Body",    
  },
  {
    id: "42",
    question: "What is DOM in HTML?",
    options: ["Hierarchy of objects in ASP.NET", "Application programming interface", "Convention for representing and interacting with object in html documents", "All of the above"],
    correct: "Convention for representing and interacting with object in html documents",    
  },
  {
    id: "43",
    question: "Marquee is a tag in HTML to__________ .",
    options: ["Display text with scrolling effect", "Mark the list of items to maintain inqueue", "Mark the text so that it is hidden in browser", "Display text with strikeout effect"],
    correct: "Display text with scrolling effect",    
  },
  {
    id: "44",
    question: "To set the color for table borders, use ____.",
    options: ["bgimage= #112233", "tablecolor= # 003344", "bordercolor= #112233", "bgcolor= #003300"],
    correct: "bordercolor= #112233",    
  },
  {
    id: "45",
    question: "The default value of Border attribute is ______.",
    options: ["1 pixel", "2 pixel", "pixel", "4 pixel"],
    correct: "1 pixel",    
  },
  {
    id: "46",
    question: "Fundamental HTML Block is known as _____.",
    options: ["HTML Element", "HTML Attribute", "HTML tag ", "HTML body"],
    correct: "HTML tag ",    
  },
  {
    id: "47",
    question: " HTML uses ________.",
    options: ["User defined tags", "Pre-specified tags", "Fixed tags defined by the language", "Tags only for linking"],
    correct: "Fixed tags defined by the language",    
  },
  {
    id: "49",
    question: "The HTML '<canvas>' element is used to:",
    options: ["Mmanipulate data in MySQL", "Create draggable elements", "Draw graphics", "Display database records"],
    correct: "Draw graphics",    
  },
  {
    id: "50",
    question: "In HTML, which attribute is used to specify that an input field must be filled out?",
    options: ["Required", "Placeholder", "Validate", "Formvalidate"],
    correct: "Required",    
  },
  {
    id: "51",
    question: "A part form 'b' tag, what other tag makes text bold?",
    options: ["Black tag", "Emp tag", "Strong tag", "Fat tag"],
    correct: "Strong tag",    
  },
  {
    id: "52",
    question: "The following html tag is used to display the content as a moving text?",
    options: ["magquee tag", "field tag", "move tag", "none of these"],
    correct: "magquee tag",    
  },
  {
    id: "53",
    question: "Which element represent proformed text?",
    options: ["main tag", "pre tag", "dir tag", "dd tag"],
    correct: "pre tag",    
  },
  {
    id: "54",
    question: "_______method is used to sent form data as HTTP post.",
    options: ["Get", "Post", "Both, Get and Post", "None"],
    correct: "Post",    
  },
  {
    id: "54",
    question: "_______method is used to sent form data as HTTP post.",
    options: ["Get", "Post", "Both, Get and Post", "None"],
    correct: "Get",    
  },
  {
    id: "55",
    question: "The correct sequence of HTML tags for starting a webpage is _____________.",
    options: ["Head, Title, HTML, Body", "HTML, Head, Title, Body", "Head, Title, Body", "HTML, Body, Title, Head HTML"],
    correct: "HTML, Head, Title, Body",    
  },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },

  
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 31;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 31;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};

