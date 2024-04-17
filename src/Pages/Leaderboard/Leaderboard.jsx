import './styles.css';
import l1 from '../../assets/img-1.png';
import l2 from '../../assets/img-2.png';
import l3 from '../../assets/img-3.png';
import l4 from '../../assets/img-4.png';
import l5 from '../../assets/img-5.png';
import l6 from '../../assets/img-6.png';
import { Helmet } from 'react-helmet';
import { FaRankingStar } from "react-icons/fa6";
import { PiStarDuotone } from "react-icons/pi";
import { BsFilePerson } from "react-icons/bs";
import { GiRank3 } from "react-icons/gi";
import { GiWhiteBook } from "react-icons/gi";
import { BiTask } from "react-icons/bi";

import { BsAward } from "react-icons/bs";
import { PiCrownFill } from "react-icons/pi";
import { GiStarMedal } from "react-icons/gi";

import { BsBookmarkStarFill } from "react-icons/bs";
import { RiShieldStarLine } from "react-icons/ri";





const Leaderboard = () => {
    return (
<>
        <Helmet>
        <title>Porbo Shobai | Leaderboard</title>
        </Helmet>
        <body className="fullbody">
        <main className='leadermain'>
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="  /> */}

        
        <div className="leader-title">
        <h2>Leader Board</h2>
        <hr/>
        </div>
        <section className="leadercontainer">
            <div className="table">
               <div className="rank-title rank">
               <h2 className="flex"><FaRankingStar className="mr-1 text-xl text-[#f5c000]" /> Rank</h2>
               </div>
               <div className="points-title points">
                <h2 className="flex"><PiStarDuotone className="mr-1 text-xl text-[#f5c000]" /> Points</h2>
               </div>
               <div className="name-title name">
                <h2 className="flex"><BsFilePerson className="mr-1 text-xl text-[#f5c000]"/> Name</h2>
               </div>
               <div className="badge">
                <h2 className="flex"><GiRank3 className="mr-1 text-xl text-[#f5c000]" /> Milestone</h2>
               </div>
               <div className="book">
                <h2 className="flex"><GiWhiteBook  className="mr-1 text-xl text-[#f5c000]" /> Book Read</h2>
               </div>
               <div className="task">
                <h2 className="flex"><BiTask className="mr-1 text-xl text-[#f5c000]"/> Total Task</h2>
               </div>

               <div className="rank ">
                <h2> 01</h2>
               </div>
               <div className="points">
                <h2> 2200</h2>
               </div>
               <div className="name">
                <img src={l1} alt="Students" />
                <h2> Nadiya Islam</h2>
               </div>
               <div className="badge">
                       <div className="icn"><BsAward className="text-2xl text-[#f5c000]" /></div>
                       <div className="icn"><PiCrownFill className="text-2xl text-[#b30083]"/></div>
                       <div className="icn"><GiStarMedal className="text-2xl text-[#06933c]"/></div>
               </div>
               <div className="book">
                <h2> 12</h2>
               </div>
               <div className="task">
                <h2> 50</h2>
               </div>


               <div className="rank ">
                <h2> 02</h2>
               </div>
               <div className="points">
                <h2> 2100</h2>
               </div>
               <div className="name">
               <img src={l2} alt="Students" />

                <h2> Abdur Rahman</h2>
               </div>
               <div className="badge">
                        <div className="icn"><BsAward className="text-2xl text-[#f5c000]" /></div>
                       <div className="icn"><PiCrownFill className="text-2xl text-[#b30083]"/></div>
                       <div className="icn"><BsBookmarkStarFill className="text-2xl text-[#06933c]"/></div>
               </div>
               <div className="book">
                <h2> 15</h2>
               </div>
               <div className="task">
                <h2> 45</h2>
               </div>


               <div className="rank ">
                <h2> 03</h2>
               </div>
               <div className="points">
                <h2> 1800</h2>
               </div>
               <div className="name">
               <img src={l3} alt="Students" />

                <h2> Ishita Das</h2>
               </div>
               <div className="badge">
                        <div className="icn"><BsAward className="text-2xl text-[#f5c000]" /></div>
                       <div className="icn"><BsBookmarkStarFill className="text-2xl text-[#06933c]"/></div>
               </div>
               <div className="book">
                <h2> 09</h2>
               </div>
               <div className="task">
                <h2> 39</h2>
               </div>


               <div className="rank ">
                <h2> 04</h2>
               </div>
               <div className="points">
                <h2> 1600</h2>
               </div>
               <div className="name">
               <img src={l4} alt="Students" />

                <h2> Golam Raisul</h2>
               </div>
               <div className="badge">
                      
               <div className="icn"><RiShieldStarLine  className="text-2xl text-[#f5c000]" /></div>

                      
               </div>
               <div className="book">
                <h2> 09</h2>
               </div>
               <div className="task">
                <h2> 30</h2>
               </div>



               <div className="rank ">
                <h2> 05</h2>
               </div>
               <div className="points">
                <h2> 1600</h2>
               </div>
               <div className="name">
               <img src={l5} alt="Students" />

                <h2> Rifat Uddin</h2>
               </div>
               <div className="badge">
               <div className="icn"><RiShieldStarLine  className="text-2xl text-[#f5c000]" /></div>
               </div>
               <div className="book">
                <h2> 02</h2>
               </div>
               <div className="task">
                <h2> 30</h2>
               </div>



               <div className="rank ">
                <h2> 06</h2>
               </div>
               <div className="points">
                <h2> 1000</h2>
               </div>
               <div className="name">
               <img src={l6} alt="Students" />

                <h2> Nazim Istiaque</h2>
               </div>
               <div className="badge">
               <div className="icn"><RiShieldStarLine  className="text-2xl text-[#f5c000]" /></div>
               </div>
               <div className="book">
                <h2> 01</h2>
               </div>
               <div className="task">
                <h2> 20</h2>
               </div>






             
               
            </div>
        </section>

    </main>
    </body></>
    );
};

export default Leaderboard;