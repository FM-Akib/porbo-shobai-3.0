import './styles.css';
import aiHead from '../../assets/aihead.png';
import { Helmet } from 'react-helmet';
// import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const Challenge = () => {


    let count = 0;
    let timer;
    let quizData;
    let answers = [];


    // const [quizdata, setQuizData] = useState(null);
    const quizdata = useLoaderData();
    console.log(quizdata);

    
    let rulesContainer = document.querySelector("#rulesContainer");
    let alertContainer = document.querySelector("#alertContainer");
    let submitContainer = document.querySelector("#submitContainer");
    let quizContainer = document.querySelector("#quizContainer");
    let answersContainer = document.querySelector("#answersContainer");
    let displayResult = document.querySelector("#displayResult");

   const handleStartQuiz =()=>{
    let countDown = document.querySelector("#countDownContainer");
    let counter = document.querySelector("#counter");
    let counterNum = 2;
    countDown.classList.remove("hidden");
    countDown.classList.add("flex");
  
    let x = setInterval(() => {
      if (counterNum < 0) {
        countDown.classList.remove("flex");
        countDown.classList.add("hidden");
        counterNum = 3;
        count = 0;
        timer = null;
        quizData = null;
        answers = [];
        rulesContainer.classList.add("hidden");
        alertContainer.classList.remove("hidden");
        submitContainer.classList.remove("hidden");
        submitContainer.classList.add("flex");
        loadQuiz();
        quizTimer();
        clearInterval(x);
      }
      counter.innerText = counterNum;
      counterNum--;
    }, 1000);
   }


// All quiz data fetched from json
const loadQuiz = async () => {
    // const res = await fetch("./quiz.json");
    // const data = await res.json();
    quizData = quizdata;
    displayQuiz(quizdata);
  };
  
  // Displaying quiz on quiz page
    const displayQuiz = (data) => {
    if (!data) {
      quizContainer.innerHTML = "";
      return;
    }
     
    data.forEach((quiz, i) => {
      // if(quizContainer){
      // console.log(quiz);
      // }
      // else console.log("I LOve you")
      quizContainer.innerHTML += `<div className="m-3 py-3 px-4 shadow-sm rounded">
    <div className="flex items-center">
      <div className="h-8 w-8 bg-green-300 rounded-full flex justify-center items-center text-green-800 mr-3">
        ${i + 1}
      </div>
      <p className="text-gray-800 text-sm">${quiz.question}</p>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-5">
      ${displayQuizOptions(quiz.options, i)}
    </div>
  </div>`;
    });
  };




// ---------------------NO CHANGE-------------------

// Handle Timer
const quizTimer = (dismiss) => {
    if (dismiss) {
      clearInterval(timer);
      return;
    }
    timer = setInterval(() => {
      let countHtml = document.querySelector("#count");
      let covtMin = Math.floor(count / 60);
      let mod = count % 60;
      let min = covtMin.toString().length === 1 ? `0${covtMin}` : covtMin;
      let countSec = mod.toString().length === 1 ? `0${mod}` : mod;
  
      countHtml.innerHTML = `${
        min + ":" + countSec
      }<sub className="text-xs">sec</sub>`;
      count++;
      if (count > 60) {
        if (count % 2 === 0) {
          countHtml.classList.remove("text-red-300");
          countHtml.classList.add("text-red-700");
        } else {
          countHtml.classList.remove("text-red-700");
          countHtml.classList.add("text-red-300");
        }
      }
    }, 1000);
  };
  
  // display quiz options
  const displayQuizOptions = (quiz, i) => {
    let serial = 1;
    let generatedOptions = "";
    for (let option of quiz) {
      generatedOptions += `<div
        className="border border-gray-200 rounded text-xs p-2 cursor-pointer"
        onclick="chooseQuiz('${i}', '${option}')">
        <p className="text-[10px] mb-1">Option ${serial}</p>
        ${option}
      </div>`;
      serial++;
    }
    return generatedOptions;
  };
  
  // select or choose quiz
  const chooseQuiz = (index, givenAns) => {
    const isExist = answers.find((ans) => ans.id === quizData[index].id);
    if (isExist) {
      let serial = 0;
      for (let quiz of answers) {
        if (isExist.id === quiz.id) {
          answers.splice(serial, 1, { ...quizData[index], givenAns });
          break;
        }
        serial++;
      }
    } else {
      answers.push({ ...quizData[index], givenAns });
    }
    displayAnswers(answers);
  };
  
  const displayAnswers = (data) => {
    // এই পুরো ফাইলে কেও কোন কিছু পরিবর্তন করবেন না । এইখানে কোন Bug নেই ।
    answersContainer.innerHTML = "";
    data = data.sort((a, b) => a.id - b.id);
    data.forEach((answer, idx) => {
      answersContainer.innerHTML += `<div className="text-left">
          <h1 className="mt-4 mb-3 text-sm">${idx + 1 + ". " + answer.question}</h1>
          <div className="flex justify-around">
            <p className="w-5 h-5 ${
              answer.options.indexOf(answer.givenAns) === 0
                ? "bg-orange-500 animate-pulse"
                : "bg-gray-500"
            } rounded-full text-white flex justify-center items-center">
              1
            </p>
            <p className="w-5 h-5 ${
              answer.options.indexOf(answer.givenAns) === 1
                ? "bg-orange-500 animate-pulse"
                : "bg-gray-500"
            } rounded-full text-white flex justify-center items-center">
              2
            </p>
            <p className="w-5 h-5 ${
              answer.options.indexOf(answer.givenAns) === 2
                ? "bg-orange-500 animate-pulse"
                : "bg-gray-500"
            } rounded-full text-white flex justify-center items-center">
              3
            </p>
            <p className="w-5 h-5 ${
              answer.options.indexOf(answer.givenAns) === 3
                ? "bg-orange-500 animate-pulse"
                : "bg-gray-500"
            } rounded-full text-white flex justify-center items-center">
              4
            </p>
          </div>
        </div>`;
    });
  };
  
  // এই পুরো ফাইলে কেও কোন কিছু পরিবর্তন করবেন না । এইখানে কোন Bug নেই ।
  
  const showAnswers = (data) => {
    // এই পুরো ফাইলে কেও কোন কিছু পরিবর্তন করবেন না । এইখানে কোন Bug নেই ।
    const quizContainer = document.querySelector("#quizContainer");
    quizContainer.innerHTML = "";
    data = data.sort((a, b) => a.id - b.id);
    data.forEach((answer, idx) => {
      quizContainer.innerHTML += `<div className="text-left">
            <h1 className="mt-4 mb-3 text-md">${idx + 1 + ". " + answer.question}</h1>
            <div>
            <h1 className="text-sm">Given Answer: <span className="text-orange-600">${
              answer.givenAns
            }</span></h1>
            <h1 className="text-sm">Correct Answer: <span className="text-green-600">${
              answer.answer
            }</span></h1>
            <p className="text-[10px] mt-5"><span className="font-medium mr-1">Description:</span>${
              answer.description
            }</p>
            </div>
          </div>`;
    });
  };






const handleSubmit = () =>{
    if (answers.length < 6) {
        return;
      }
      quizTimer(true);
      answersContainer.innerHTML = `<div className="my-4">
      <i className="fa-solid fa-fan animate-spin text-2xl text-green-600"></i>
      <p className="text-xs animate-pulse">Please Wait, We are checking...</p>
    </div>`;
      let timeTaken = document.querySelector("#count");
      let totalMark = 0;
      let grade = {
        status: "",
        color: "",
      };
    
      for (let ans of answers) {
        if (ans.answer === ans.givenAns) {
          totalMark += 10;
        }
      }
    
      if (totalMark === 60) {
        grade.status = "Excellent";
        grade.color = "text-green-600";
      } else if (totalMark >= 40 && totalMark < 60) {
        grade.status = "Good";
        grade.color = "text-orange-600";
      } else {
        grade.status = "Poor";
        grade.color = "text-red-600";
      }
    
      // data setting on local storage and getting data from local storage
      let storage = JSON.parse(localStorage.getItem("results"));
      if (storage) {
        localStorage.setItem(
          "results",
          JSON.stringify([
            ...storage,
            {
              marks: totalMark,
              examTime: timeTaken.innerText,
              status: grade.status,
            },
          ])
        );
      } else {
        localStorage.setItem(
          "results",
          JSON.stringify([
            {
              marks: totalMark,
              examTime: timeTaken.innerText,
              status: grade.status,
            },
          ])
        );
      }
    
      // Right side bar/ answer section
      let x = setTimeout(() => {
        showAnswers(answers);
        displayResult.innerHTML = `<div
        className="h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center border-2 rounded-tr-[50%] rounded-bl-[50%]"
      >
        <h3 className="text-xl ${grade.color}">${grade.status}</h3>
        <h1 className="text-3xl font-bold my-2">
          ${totalMark}<span className="text-slate-800">/60</span>
        </h1>
        <p className="text-sm flex justify-center items-center gap-2">
          Total Time: <span className="text-xl text-orange-500">${timeTaken.innerText.replace(
            "sec",
            ""
          )}<span className="text-xs">sec</span></span>
        </p>
      </div>
      
      <button onclick="location.reload();" className="bg-green-600 text-white w-full py-2 rounded mt-16">Restart</button>
      ${
        storage
          ? `<div className="mt-5">
          <h1 className="text-center">Previous Submissions <button className="text-blue-800 text-xs" onclick={localStorage.clear();location.reload()}>Clear History</button></h1>
        <div
        className="flex justify-between items-center border rounded p-2 my-2 shadow-sm font-medium">
        <div>Marks</div>
        <div>Grade</div>
        <div>Time</div>
        </div>
        ${storage
          ?.reverse()
          ?.map(
            (item) => `<div
          className="flex justify-between items-center border rounded p-2 my-2 shadow-sm">
          <div>${item.marks}/60</div>
          <div>${item.status}</div>
          <div>${item.examTime}</div>
          </div>`
          )
          ?.join("")}`
          : ""
      }
      </div>
      `;
    
        clearTimeout(x);
      }, 1500);
      window.scrollTo(0, 0);
}

    return (

<>
        <Helmet>
        <title>Porbo Shobai | Challenge</title>
        </Helmet>


        <body>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@700&family=Noto+Sans+JP:wght@500&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"/>
        
                    
        <div className="head">
            <img src={aiHead} alt="Challenge Header"/>
        </div>
        
        
        {/* <div className="app_back">
        
        <h1>Welcome to the Battle!</h1>
        
        <div className="quiz">
        <h2 id="question">Question goes here.</h2>
        <div id="answer-option-btn" className="answerBackground">
        <button className="btn-answer">Answer 1</button>
        <button className="btn-answer">Answer 2</button>
        <button className="btn-answer">Answer 3</button>
        <button className="btn-answer">Answer 4</button>
        
        
        
        </div>
        <button id="next-btn">Next</button>
        </div>
        </div> */}

<div className="bg-white font-common">
    {/* <!-- Header/Navbar section start --> */}
    <header className="h-16 flex items-center shadow-sm">
      <nav className="flex justify-between items-center w-9/12 mx-auto">
        <div className="text-zinc-800 font-bold uppercase">
          <h1 className="text-lg">Quiz <span className="text-green-700">HERO</span></h1>
          <p className="text-[10px] font-normal capitalize -mt-1">
            Get ready to Quiz and be amazed!
          </p>
        </div>
        <Link to="/blog"><button
          className="bg-green-600 font-light text-sm px-5 py-1 rounded text-white" 
        >
          Blog
        </button></Link>
      </nav>
    </header>
    {/* <!-- Header/Navbar section end --> */}

    {/* <!-- Landing page content start --> */}
    <section
      className="lg:w-9/12 md:w-[90%] w-[95%] mx-auto text-center"
      id="rulesContainer"
    >
      <h1 className="text-center my-8 text-xl">Welcome to Quiz Hero</h1>
      <div className="lg:w-[80%] md:w-[90%] w-[90%] mx-auto text-left">
        <h1 className="text-md text-gray-800 text-center">Quiz Rules:</h1>
        <p className="text-xs italic mt-1 mb-4 text-orange-800 text-center">
          Please read all the rules and steps before start.
        </p>
        {/* <!-- Quiz rules start --> */}
        <ul className="text-sm my-10">
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 1:</span> Click on the
            <span className="bg-green-600 text-white px-2 rounded">Start Quiz</span>
            button below.
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 2:</span> After
            clicking Start button, you will see a page with 3s count down, wait
            until the count is over!
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 3:</span> You will see
            the questions with 4 options for each, and counter will start and
            which will count your exam time.
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 4:</span> You have to
            select the correct answer, and you have 60 seconds to answer 6
            questions.
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 5:</span> Click on the
            submit quiz button, when you are done with all the answers.
          </li>
        </ul>
        {/* <!-- Quiz rules end --> */}
      </div>
      <button onClick={handleStartQuiz} className="bg-green-600 px-20 py-2 text-white rounded" id="startQuiz">
        Start Quiz
      </button>
    </section>
    {/* <!-- Landing page content start --> */}

    {/* <!-- Top bar of question page start --> */}
    <section
      className="shadow-sm my-5 py-2 sticky top-0 bg-white z-10 hidden"
      id="alertContainer"
    >
      <div
        className="w-9/12 mx-auto flex md:flex-row flex-col justify-between items-center"
      >
        <div className="text-xs font-normal">
          <span className="text-red-700">Attention!</span> You have 60 seconds to
          answer 6 questions.
          <br />
          Please keep an eye on the timer and make sure to answer all questions
          before time runs out.
        </div>
        {/* <!-- Timer part Start --> */}
        <div className="flex items-center">
          <p className="mr-2 text-xl text-gray-700">
            <i className="fa-solid fa-clock-rotate-left"></i>
          </p>
          <div className="text-left">
            <h1 className="text-green-700 text-xl" id="count">
              00:00<sub className="text-xs ml-1">sec</sub>
            </h1>
            <p className="text-xs -mt-1 text-gray-700">Time Consumed</p>
          </div>
        </div>
        {/* <!-- Timer part end --> */}
      </div>
    </section>
    {/* <!-- Top bar of question page end --> */}

    {/* <!-- Quiz section start --> */}
    <section
      className="md:w-9/12 w-[90%] md:flex-row flex-col mx-auto hidden"
      id="submitContainer"
    >
      {/* <!-- Question section start --> */}
      <div className="md:w-[70%] w-full">
        <div className="duration-500" id="quizContainer" ></div>
      </div>
      {/* <!-- Question section end --> */}
      {/* <!-- Answer section start --> */}
      <div className="md:w-[30%] w-full shadow-sm">
        <div className="mx-2 text-center sticky top-20" id="displayResult">
          <div className="mb-8">
            <p>Chosen Answers</p>
            <div id="answersContainer">
              <h1 className="text-xl my-4 text-red-600">No Answers</h1>
            </div>
          </div>
          <h1 className="mt-5 mb-2 text-lg capitalize font-medium text-gray-700">
            All Done! Ready to submit your quiz?
          </h1>
          <button onClick={handleSubmit}
            className="bg-green-600 text-white w-full py-2 rounded"
            id="submit"
          >
            Submit Quiz
          </button>
        </div>
      </div>
      {/* <!-- Answer section end --> */}
    </section>
    {/* <!-- Quiz section end --> */}

    {/* <!-- Countdown section start --> */}
    <div
      className="fixed top-0 left-0 bg-zinc-900 bg-opacity-90 w-full h-full justify-center items-center z-20 hidden"
      id="countDownContainer"
    >
      <div className="text-center">
        <h1 className="text-gray-200 text-3xl mb-5">
          <span id="counter">3</span>s
        </h1>
        <h1 className="text-gray-200 text-xl animate-pulse">
          Stay Seated, Stay Sharp. Starting Quiz In a moment!
        </h1>
      </div>
    </div>
    {/* <!-- Countdown section end --> */}

    {/* <!-- Footer section start --> */}
    <footer className="py-10 text-center text-sm">
      Copyright © 2024 Porbo Shobai All Rights Reserved.
    </footer>
    {/* <!-- Footer section end --> */}
  </div>
        
        </body>
        </>
    );
};

export default Challenge;