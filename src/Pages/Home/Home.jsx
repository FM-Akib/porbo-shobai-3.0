import './styles.css'
import mainhead from '../../assets/mainHead.png'
import m1 from '../../assets/Competiton.png';
import m2 from '../../assets/leaderboard.png'
import m3 from '../../assets/aimaster.png'



import t1 from '../../assets/img-1.png';
import t2 from '../../assets/img-2.png';
import t3 from '../../assets/img-3.png';
import t4 from '../../assets/img-4.png';
import t5 from '../../assets/img-5.png';
import t6 from '../../assets/img-6.png';


import b1 from '../../assets/blog-1.png'
import b2 from '../../assets/blog-2.png'
import b3 from '../../assets/blog-3.png'
import b4 from '../../assets/blog-4.png'
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
        <Helmet>
        <title>Porbo Shobai | Home</title>
        </Helmet>


      {/* <h1>Hello World</h1> */}
           <div>
        <div className="mainhead">
    <img src={mainhead} alt="head"/>
</div>
<div className="event-message">
   <input type="text"/>
   <button type="button" className="button-a event-visit-btn">Message</button>
   <button type="button" role="button" className="button-a event-visit-btn">Sign up</button> 
   <button type="button" role="button" className="button-a event-visit-btn">Login</button> 
</div>

    <section className="homemain">

        <div className="main-event">
            <div className="home-content">
            <div className="main-event-img">
                <img src={m1} alt="img"/>
            </div>
            <button className="home-view">Perticipate</button>
            </div>
            <div className="home-content">
                <div className="main-event-img">
                <img src={m2} alt="img"/>

                </div>
                <button className="home-view">View</button>
                </div>
                <div className="home-content">
                    <div className="main-event-img">
                    <img src={m3} alt="img"/>

                    </div>
                    <button className="home-view">Challenge</button>
                    </div>
                     
         
            
        </div>
       
    </section>


    <section className="top-container toper-container mx-auto">
            <div className="topperall">
            <h2 className="toper-heading">Top Contributors <i className="fa-solid fa-award" style={{color: '#e7d50d'}}></i></h2>
            <div className="topers">
                <div className="toper">
                    <img src={t1} alt="" className="img"/>
                    <h3>Nadia Islam</h3>
                </div>
                <div className="toper">
                    <img src={t2} alt="" className="img"/>
                    <h3>Abdur Rahman</h3>
                </div>
                <div className="toper">
                    <img src={t3} alt="" className="img"/>
                    <h3>Ishita Das</h3>
                </div>
                <div className="toper">
                    <img src={t4} alt="" className="img"/>
                    <h3>Golam Raisul</h3>
                </div>
                <div className="toper">
                    <img src={t5} alt="" className="img"/>
                    <h3>Rifat Uddin</h3>
                </div>
                <div className="toper">
                    <img src={t6} alt="" className="img"/>
                    <h3>Nazim Istiaque</h3>
                </div>
            </div>
        </div>
        {/* <hr/> */}
        <div className="topperall blogall">
            <h2 className="blog-heading">Top Blogs <i className="fa-brands fa-microblog" style={{color: '#08bf79'}}></i></h2>
            <div className="blogs">
               <article className="blog">
                <img src={b1} alt="" className=""/>
                <div className="blog-description">
                    <h2>Vector Physics 1st HSC</h2>
                    <p>Catagory: Hand Note.<br/>By <a className="author" href="">Nadia Islam</a></p>
                </div>
               </article>
               <article className="blog">
                <img src={b2} alt="" className=""/>
                <div className="blog-description">
                    <h2>About Artificial Intelligence</h2>
                   
                    <p>Catagory: Blog.<br/>By <a className="author" href="">Abdur Rahman</a></p>
                </div>
               </article>
               <article className="blog">
                <img src={b3} alt="" className=""/>
                <div className="blog-description">
                    <h2>My Favourite Places</h2>
                   
                    <p>Catagory: Blog.<br/>By <a className="author" href="">Ishita Das</a></p>
                </div>
               </article>
               <article className="blog">
                <img src={b4} alt="" className=""/>
                <div className="blog-description">
                    <h2>How I focus in my study?</h2>
                   
                    <p>Catagory: blog.<br/>By <a className="author" href="">Nazim Istiaque</a></p>
                </div>
               </article>
              
            </div>
        </div>
        </section>

        <section className="top-container toppers-all mx-auto">
            <div className="topperall">
            <h2 className="toper-heading">Top Students <i className="fa-solid fa-award" style={{color: '#e7d50d'}}></i></h2>
            <div className="topStudentsEithButton">
            <div className="topers">
                <div className="toper">
                    <img src={t1} alt="" className="img"/>
                    <h3>Nadia Islam</h3>
                </div>
                <div className="toper">
                    <img src={t2} alt="" className="img"/>
                    <h3>Abdur Rahman</h3>
                </div>
                <div className="toper">
                    <img src={t3} alt="" className="img"/>
                    <h3>Ishita Das</h3>
                </div>
                <div className="toper">
                    <img src={t4} alt="" className="img"/>
                    <h3>Golam Raisul</h3>
                </div>
                <div className="toper">
                    <img src={t5} alt="" className="img"/>
                    <h3>Rifat Uddin</h3>
                </div>
                <div className="toper">
                    <img src={t6} alt="" className="img"/>
                    <h3>Nazim Istiaque</h3>
                </div>
            </div>
            <a href="./LeaderBoard" target="_blank"><button className="btn-leaderboard">Leaderboard</button></a>
        </div>
    </div>
      
        </section>

    </div>
        </div>
    );
};

export default Home;