import './styles.css';
import aiHead from '../../assets/aihead.png';
const Challenge = () => {
    return (
        <body>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@700&family=Noto+Sans+JP:wght@500&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"/>
        
                    
        <div className="head">
            <img src={aiHead} alt="Challenge Header"/>
        </div>
        
        
        <div className="app_back">
        
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
        </div>
        
            </body>
    );
};

export default Challenge;