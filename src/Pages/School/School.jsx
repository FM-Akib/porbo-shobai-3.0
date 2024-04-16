import './Styles.css';

import SchoolHead from '../../assets/schoolHead.png';
import s1 from '../../assets/ideal school.png';  
import s2 from '../../assets/vn.png';
import s3 from '../../assets/rajuk_school.png';
import s4 from '../../assets/dr_school.png';
import map from '../../assets/map.png';


const School = () => {
    return (
        <div>
             <div className="Schoolhead">
      <img src={SchoolHead} alt="School Header" />
    </div>


    <section className="main">
        
       


        <div className="school">
            <div className="school-img">
                <img src={s1} alt="School Image" />
              </div>
            <div className="school-title">
                <h2 className="school-name">Ideal School & College, Motijheel, Dhaka.</h2>
               <a href="https://iscm.edu.bd/" target="_blank"><button className="visit-btn">Visit</button></a>

               <div className="school-infos">
                <p className="school-info"><img src={map} alt="map"/>  Address:</p>
                <p className="school-info">Motijheel, Dhaka-1000</p>
                <p className="school-info">Call - 48310177</p>
                <p className="school-info">iscmdhaka@gmail.com</p>
            </div>
            </div>
           
        </div>
    
        <div className="school">
            <div className="school-img">
            <img src={s2} alt="School Image" />
              </div>
            <div className="school-title">
                <h2 className="school-name">Viqarunnisa Noon School and College.</h2>
                <a href="https://www.vnsc.edu.bd/" target="_blank"><button className="visit-btn">Visit</button></a>

               <div className="school-infos">
               <p className="school-info"><img src={map} alt="map"/>  Address:</p>
                <p className="school-info">1/A, New Bailey Road Dhaka , 1000 Bangladesh</p>
                <p className="school-info">Call - 01867268422</p>
                <p className="school-info">vnsc_bd@yahoo.com</p>
            </div>
            </div>
           
        </div>

        <div className="school">
            <div className="school-img">
            <img src={s3} alt="School Image" />
              </div>
            <div className="school-title">
                <h2 className="school-name">Rajuk Uttara Model College.</h2>
                <a href="http://www.rajukcollege.edu.bd/" target="_blank"><button className="visit-btn">Visit</button></a>

               <div className="school-infos">
               <p className="school-info"><img src={map} alt="map"/>  Address:</p>
                <p className="school-info">Sector#6, Uttara Model Town, Dhaka.</p>
                <p className="school-info">Call - +88-02-48957101-4</p>
                <p className="school-info">rajukcollege94@gmail.com</p>
            </div>
            </div>
          
        </div>

        <div className="school">
            <div className="school-img">
            <img src={s4} alt="School Image" />
              </div>
            <div className="school-title">
                <h2 className="school-name">Dhaka Residential Model College.</h2>
                <a href="http://www.drmc.edu.bd/" target="_blank"><button className="visit-btn">Visit</button></a>


               <div className="school-infos">
               <p className="school-info"><img src={map} alt="map"/>  Address:</p>
                <p className="school-info">Mohammadpur, Dhaka.</p>
                <p className="school-info">Call - +880258153774</p>
                <p className="school-info">drmc_bd@yahoo.com</p>
            </div>
            </div>
            
        </div>

    </section>

        </div>
    );
};

export default School;