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
let count = 20;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Company restore option is available in ________.",
    options: ["New company", "Company reset", "Company information", "Edit company"],
    correct: "Company information",
  },
  {
    id: "1",
    question: "To change current Date from Gateway of tally press the key ____.",
    options: ["F1", "F2", "F3","F4"],
    correct: "F2",
  },
  
  {
    id: "2",
    question: "Tally supports ________ system of accounting.",
    options: ["single entry", "double entry", "no entry", " null entry"],
    correct: "double entry",
  },
  {
    id: "3",
    question: "Tally can maintain ________ for stock keeping, so that fresh inventory may arrive before the old stock is exhausted.",
    options: ["reorder level", "profit", "loss", "cash"],
    correct: "reorder level",
  },
  {
    id: "4",
    question: " Balance sheet is produced ________when accounts are maintained in Tally.",
    options: ["manually", "automatically", "remotely", "randomly"],
    correct: "automatically",
  },
  {
    id: "5",
    question: "The statement of account debits, credits, assets and liabilities is called______.",
    options: [" stock& inventory report","profit & loss account", "balance sheet", "cash balance"],
    correct: "balance sheet",
  },
  {
    id: "6",
    question: "Pressing _______button in the Gateway of Tally opens company info in Tally",
    options: ["Alt+F3", "F11", "F5", "F6"],
    correct: "Alt+F3",
  },
  {
    id: "7",
    question: "Pressing______ key opens accounting features.",
    options: ["Alt+F3", "F11", "F5", "F6"],
    correct: "F11",
  },
  {
    id: "8",
    question: "Payroll, budgeting and scenario management may be enabled through ______menu in tally",
    options: ["Accounting Features", " Inventory Features", "Statutory and Taxation", "none of them"],
    correct: "Accounting Features",
  },
  {
    id: "9",
    question: "Account Groups, Ledgers, Budget and scenario are available under ______ in Tally",
    options: [" Payroll Info", "nventory Info", "Accounts Info", "none of them"],
    correct: "Accounts Info",
  },
  {
    id: "10",
    question: "Employee groups, employee, attendance/production types, pay heads,salary details, voucher types, etc. are available under in Tally",
    options: ["Payroll Info", "Inventory Info", "Accounts Info", "none of them"],
    correct: "Payroll Info",
  },
  {
    id: "11",
    question: "_____ is the shortcut to create contra voucher in Tally.",
    options: ["F5", "F4", "F3", "F2"],
    correct: "F4",
  },
  {
    id: "12",
    question: "______ is the shortcut to create payment voucher in Tally.",
    options: ["F4", "F5", "F6", "F7"],
    correct: "F5",
  },
  {
    id: "13",
    question: "_______ is the shortcut to create receipt voucher in Tally.",
    options: ["F4", "F5", "F6", "F7"],
    correct: "F6",
  },
  {
    id: "14",
    question: "______ is the shortcut to configure a company in Tally",
    options: ["F12", "F11", "F10", "F9"],
    correct: "F12",
  },
  {
    id: "15",
    question: " ______ is the shortcut to change the accounting period from Gateway of Tally.",
    options: ["F1", "Alt+F1", "Alt+F2", "Alt+F3"],
    correct: "Alt+F2",
  },
  {
    id: "16",
    question: "______ is the shortcut to shut a company in Tally.",
    options: ["F1", "Alt+F1", "Alt+F2", "Alt+F3"],
    correct: "Alt+F1",
  },
  {
    id: "17",
    question: " ______ is the shortcut to purchase voucher from Accounting Vouchers in Tally",
    options: ["Alt+F1", "Ctrl+F1", "F8", "F9"],
    correct: "F9",
  },
  {
    id: "18",
    question: "______is the shortcut to credit note from Accounting Vouchers in Tally.",
    options: ["Alt+F1", "Ctrl+F1", "Ctrl+F9", "Ctrl+F8"],
    correct: "Ctrl+F8",
  }, {
    id: "19",
    question: " _____ is the shortcut to debit note from Accounting Vouchers in Tally.",
    options: ["Alt+F1", "Ctrl+F1", "Ctrl+F9", "Ctrl+F8"],
    correct: "Ctrl+F9",
  }, {
    id: "20",
    question: "______ is the shortcut to reversing journal from Accounting Vouchers in Tally",
    options: ["F10", "Ctrl+F10", "Alt+I", "Alt+V"],
    correct: "F10",
  }, {
    id: "21",
    question: " _____ is the shortcut to Memos from Accounting Vouchers in Tally.",
    options: ["F10", "Ctrl+F10", "Alt+I", "Alt+V"],
    correct: "Ctrl+F10",
  }, {
    id: "22",
    question: ". _____ is the shortcut to Accounting Invoice from Accounting Vouchers in Tally.",
    options: ["Alt +V", "Alt +I", "F10", "Ctrl+F10"],
    correct: "Alt +I",
  }, {
    id: "23",
    question: " ______ is the shortcut to voucher as invoice from Accounting Vouchers in Tally.",
    options: ["F10", "Ctrl+F10", "Alt +I", "Ctrl +V"],
    correct: "Ctrl +V",
  }, {
    id: "24",
    question: "_____ is the shortcut to postdated voucher from Accounting Vouchers in Tally.",
    options: ["Ctrl+ T", "Ctrl+F10", "Ctrl +V", "Alt +I "],
    correct: "Ctrl+ T",
  }, {
    id: "25",
    question: "_____ is the shortcut to optional voucher from Accounting Vouchers in Tally.",
    options: ["Ctrl+ L", "Ctrl+F10", "Ctrl +V", "Alt +I "],
    correct: "Ctrl+ L",
  }, {
    id: "26",
    question: "Creating a hypothetical situation for a company is called_____.",
    options: ["budgeting", "scenario", "inventory", "voucher entry"],
    correct: "scenario",
  }, {
    id: "27",
    question: "_______ is the shortcut to delete an item in Tally.",
    options: ["Alt+D", "Alt+ Q", "Alt+P", "Alt+G"],
    correct: "Alt+D",
  }, {
    id: "28",
    question: "______is the shortcut to quit/ exit/ close Tally.",
    options: ["Alt+D", "Alt+ Q", "Alt+P", " Alt+G"],
    correct: "Alt+ Q",
  }, {
    id: "29",
    question: "_____ is the shortcut to create a master at a voucher screen in Tally.",
    options: [" Alt+2", "Alt+ A", "Alt+ C", "Alt+ E"],
    correct: "Alt+ C",
  }, {
    id: "30",
    question: "Cost centrecan be created using______ menu in Features (F11) at Gateway of Tally",
    options: ["none of them", "Statutory & taxation", "Inventory features", "Accounting features"],
    correct: "Accounting features",
  }, {
    id: "31",
    question: "A number ranging from 0 to 1 (or as apercentage) to measure the performance of company against its potential is called_______.",
    options: ["scenarios", "budgets", "ratio analysis", "voucher"],
    correct: "ratio analysis",
  }, {
    id: "32",
    question: "Stock maintained for production purpose is called_____.",
    options: ["ledger", "payroll", " trial balance", "inventory"],
    correct: "inventory",
  }, {
    id: "33",
    question: " _____ is the shortcut for purchase order in Tally.",
    options: ["F8", "F9", "Alt+F4", "Alt+F5"],
    correct: "Alt+F4",
  }, {
    id: "34",
    question: "_____is the shortcut for sales order in Tally",
    options: ["F8", "F9", "Alt+F4", "Alt+F5"],
    correct: "Alt+F5",
  }, {
    id: "35",
    question: " _____is the shortcut for purchase voucher in Tally.",
    options: ["F8", "F9", "Alt+F4", "Alt+F5"],
    correct: "F9",
  }, {
    id: "36",
    question: " _____ is the shortcut for sales voucher in Tally.",
    options: ["F8", "F9", "Alt+F4", "Alt+F5"],
    correct: "F8",
  }, {
    id: "37",
    question: "The head of account for a POS voucher should be under_____.",
    options: ["Sales", "Purchase", "Expense", "Income"],
    correct: "Sales",
  }, {
    id: "38",
    question: "In taxation, FBT stands for____",
    options: ["Fringe Benefit Tax", "Frame Benefit Tax", "Fast Benefit Tax", "Fringe Benefit Tariff"],
    correct: "Fringe Benefit Tax",
  }, {
    id: "39",
    question: "The tax collected by the employer towards income of an employee is called____",
    options: ["Tax Collected at Source", "Tax Deducted at Source (TDS)", "Fringe Benefit Tax (FBT)", "Value Added Tax (VAT)"],
    correct: "Tax Deducted at Source (TDS)",
  }, {
    id: "40",
    question: "The tax on the value added to an item is called ____",
    options: ["Tax Collected at Source", "Tax Deducted at Source (TDS)", "Fringe Benefit Tax (FBT)", "Value Added Tax (VAT)"],
    correct: "Value Added Tax (VAT)",
  },
  {
    id: "41",
    question: "Language of Tally user interface can be changed using in Tally Window.",
    options: ["Languages (Alt+ G)", "Delete (Alt+ D)", "Print (Alt+ P)", "Quit (Alt+ Q)"],
    correct: "Languages (Alt+ G)",
  },
  {
    id: "43",
    question: "Tally ERP 9 supports about languages.",
    options: ["13", "3", "2", "1"],
    correct: "13",
  },
  {
    id: "44",
    question: "Which is prepared to ascertain actual profit or loss of the business?",
    options: ["Profit and loss account", "Balance sheet", "Trading account", "Book-keeping"],
    correct: "Profit and loss account",
  },
  {
    id: "45",
    question: ".Which are the things and properties for resale that converts into cash?",
    options: ["Current assets", "Business Transaction", "Liabilities", "Purchase"],
    correct: "Current assets",
  },
  {
    id: "46",
    question: "Which function key is used to record fund transfer between cash and bank account? ",
    options: ["F7", "F6", "F5", "F4"],
    correct: "F4",
  },
  {
    id: "47",
    question: "What is a summarized record of all the transactions to every person, every property and every type of service?",
    options: ["Account", "Journals", "Ledgers", "Vouchers"],
    correct: "Account",
  },
  {
    id: "48",
    question: "Which is the main book of final entry for accounts?",
    options: ["Balance sheet", "Ledger", "Receipts", "Vouchers"],
    correct: "Ledger",
  },
  {
    id: "49",
    question: "What is termed as excess of credit side total amount over debit side total amount in profit and loss account?",
    options: ["Profit", "Loss", "Debit", "Credit"],
    correct: "Profit",
  },
  {
    id: "50",
    question: "Which is a statement of assets and liabilities?",
    options: ["Trial balance", "Ledgers", "Journals", "Balance sheet"],
    correct: "Balance sheet",
  },

  {
    id: "51",
    question: "Which activity in Tally is used to find out the financial position of the organisation?",
    options: ["Balance sheet", "Book-keeping", "Trading", "Profit and loss"],
    correct: "Balance sheet",
  },
  {
    id: "52",
    question: "Who gives benefits without receiving money, but will claim in future?  ",
    options: ["Creditor", "Debtor", "Owner", "Worker"],
    correct: "Creditor",
  },
  {
    id: "53",
    question: "Which shortcut key is used to shut a company from the gateway of Tally screen?",
    options: ["Alt + F7", "Alt + F5", "Alt + F3", "Alt + F1"],
    correct: "Alt + F1",
  },
  {
    id: "54",
    question: "Which sequence of option is used to view the trial balance on the screen?",
    options: ["Gateway of Tally →Trial balance", "Geteway of Tally → Display → Account Book → Trial balance", "Gateway of Tally → Accounts Info → Trial Balance", "Gateway of Tally → Display → Trial Balance"],
    correct: "Gateway of Tally → Display → Trial Balance",
  },
  {
    id: "55",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "56",
    question: "Which report displays the summary of all the cost centres under a cost category? ",
    options: ["Category summary", "Cost centre Break-up", "Ledger break-up", "Group Break-up"],
    correct: "Category summary",
  },
  {
    id: "57",
    question: "Company restore option is available in _________________.",
    options: ["Company reset", "New company", "Company information", "Edit company"],
    correct: "Company information",
  },
  {
    id: "58",
    question: "To change current Date from Gateway of tally press the key___________.",
    options: ["F1", "F2", "F3", "F4"],
    correct: "F2",
  },{
    id: "59",
    question: "Tally supports_______________system of accounting.",
    options: ["single entry", "double entry", "no entry", "null entry"],
    correct: "double entry",
  },{
    id: "60",
    question: "Tally can maintain_______________for stock keeping, so that fresh inventory may arrive before the old stock is exhausted.",
    options: ["reorder level", "profit", "loss", "cash"],
    correct: "reorder level",
  },{
    id: "61",
    question: "Balence sheet is produced___________when accounts are maintained in Tally.",
    options: ["manually", "automatically", "remotely", "randomly"],
    correct: "automatically",
  },{
    id: "62",
    question: "The statement of account debits, credits, assets and liabilities is called_____________.",
    options: ["stock and inventory report", "balance sheet", "profit and loss account", "cash balance"],
    correct: "balance sheet",
  },{
    id: "63",
    question: "Which budget is prepared for a very short period?",
    options: ["Current budget", "Long term budget", "Rolling budget", "Short term budget"],
    correct: "Current budget",
  },{
    id: "64",
    question: "What is the purpose of securityj feature in Tally?",
    options: ["Provides budget option", "Provides option for data backup", "Provides option to upload reports", "Provides statement of accounts"],
    correct: "Provides option for data backup",
  },{
    id: "65",
    question: "In tasation, VAT stands for_______________",
    options: ["value Assigned Tax", "Value Approved Tax", "Value Added Transaction", "value Added Tax"],
    correct: "value Added Tax",
  },{
    id: "66",
    question: "In tasation, TCS stands for_______________",
    options: ["Tax Creation at Source", "Tax Collected at Source", "Tax Combined at Source", "Traiff Collected at Station"],
    correct: "Tax Collected at Source",
  },{
    id: "67",
    question: "In tasation, TCS stands for_______________",
    options: ["", "", "", ""],
    correct: "",
  },{
    id: "68",
    question: "POS stands for_______________in Tally",
    options: ["Purchase of Sale", "Point of Safety", "Purpose of Sale", "Point of sale"],
    correct: "Point of sale",
  },{
    id: "69",
    question: "________is the shortcut to shut a company in Tally",
    options: ["F1", "Alt + F1", "Alt + F2", "F2"],
    correct: "Alt + F1",
  },{
    id: "70",
    question: "________is the shortcut to compant info from Gatewat of Tally.",
    options: ["F1", "Alt + F1", "Alt + F3", "F2"],
    correct: "Alt + F3",
  },{
    id: "71",
    question: "Tally allows data entry in language(s).",
    options: ["Only Tamil", "Only Hindi", "Only English", "Many Indian/Assian"],
    correct: "Many Indian/Assian",
  },{
    id: "72",
    question: "Tally can maintain_________accounts.",
    options: ["tax accounts", "liabilities account", "both", "none of these"],
    correct: "both",
  },{
    id: "73",
    question: "Tally can provide___________to each company.",
    options: ["password security", "no security", "barrier", "wrapper"],
    correct: "password security",
  },{
    id: "74",
    question: "Tally supports__________accounting types.",
    options: ["cash", "payroll", "inventory", "all of the above"],
    correct: "",
  },{
    id: "75",
    question: "Tally is a __________software.",
    options: ["spreadsheet", "accounting", "publishing", "animation"],
    correct: "accounting",
  },{
    id: "76",
    question: "Financial Year period is____________.",
    options: ["1 April to 31 March", "1 January to 31 December", "1 June to 31 July", "None of these"],
    correct: "1 April to 31 March",
  },{
    id: "77",
    question: "Account Groups, Ledger, Budget and scenario are available under_________in Tally.",
    options: ["payroll info", "accounts info", "inventory info", "none of these"],
    correct: "accounts info",
  },{
    id: "78",
    question: "Tally package is developed by___________.",
    options: ["Tally solutions", "Tally corporation", "Tally company", "Tata company."],
    correct: "Tally solutions",
  },{
    id: "79",
    question: "Which option from company info menu is selected to create a new company.",
    options: ["Create Company", "Crete", "New Company", "Company Create"],
    correct: "Create Company",
  },{
    id: "80",
    question: "Tally has been developed using",
    options: ["None of These", "Visual Basic ", "C++", "C"],
    correct: "C++",
  },{
    id: "81",
    question: "Tally data files are stored in",
    options: ["Data directory", " Application Directory", "Configuration Directory", "None of these"],
    correct: "Data directory",
  },{
    id: "82",
    question: "We can view the interest Calculation report from",
    options: ["None of these", "Statement of Accounts", "Accounts Book", "Accounts info."],
    correct: "Statement of Accounts",
  },{
    id: "83",
    question: "Alt + D is used to",
    options: ["Create any voucher", " Delete any voucher", "Copy any voucher", "None of the above"],
    correct: " Delete any voucher",
  },{
    id: "84",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "85",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  //{
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "86",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "87",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "88",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "89",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "90",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "91",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "92",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "93",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "94",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "95",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "96",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "97",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "98",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },
  // {
  //   id: "99",
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
      count = 21;                 //timer setting start from 20 second.
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
  count = 20;
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