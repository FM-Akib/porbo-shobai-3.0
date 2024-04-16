import './styles.css';

import collegeHead from '../../assets/College head.png';
import c1 from '../../assets/dhaka_college.png';  
import c2 from '../../assets/adamjee_cantonment_college.png';
import c3 from '../../assets/rajshahi_college.png';
import c4 from '../../assets/notre_dame_college.png';
import cmap from '../../assets/map.png';

const College = () => {
    return (
        <div>
            <div className="collegehead">
      <img src={collegeHead} alt="college Header" />
    </div>


    <section className="main">
        
       


        <div className="college">
            <div className="college-img">
                <img src={c1} alt="college Image" />
              </div>
            <div className="college-title">
                <h2 className="college-name">Dhaka College.</h2>
               <a href="http://dhakacollege.edu.bd/" target="_blank"><button className="visit-btn">Visit</button></a>

               <div className="college-infos">
                <p className="college-info"><img src={cmap} alt="map"/>  Address:</p>
                <p className="college-info">New Market, Dhaka-1000</p>
                <p className="college-info">Call - 029666058</p>
                <p className="college-info">dhakacollegeprincipal@gmail.com</p>
            </div>
            </div>
           
        </div>
    
        <div className="college">
            <div className="college-img">
            <img src={c2} alt="college Image" />
              </div>
            <div className="college-title">
                <h2 className="college-name">Adamjee Cantonment College</h2>
                <a href="http://acc.edu.bd/" target="_blank"><button className="visit-btn">Visit</button></a>

               <div className="college-infos">
               <p className="college-info"><img src={cmap} alt="map"/>  Address:</p>
                <p className="college-info">Shaheed Sharani , Dhaka 1206</p>
                <p className="college-info">Call -028872446</p>
                <p className="college-info">info@acc.edu.bd</p>
            </div>
            </div>
           
        </div>

        <div className="college">
            <div className="college-img">
            <img src={c3} alt="college Image" />
              </div>
            <div className="college-title">
                <h2 className="college-name">Rajshahi College</h2>
                <a href="http://rc.edu.bd/" target="_blank"><button className="visit-btn">Visit</button></a>

               <div className="college-infos">
               <p className="college-info"><img src={cmap} alt="map"/>  Address:</p>
                <p className="college-info">Saheb Bazar Rd,Rajshahi 6100.</p>
                <p className="college-info">Call - 02588855475</p>
                <p className="college-info">rajshahicollegebd@gmail.com</p>
            </div>
            </div>
          </div>
        

        <div className="college">
            <div className="college-img">
            <img src={c4} alt="college Image" />
              </div>
            <div className="college-title">
                <h2 className="college-name">Notre Dame College.</h2>
                <a href="http://ndc.edu.bd/" target="_blank"><button className="visit-btn">Visit</button></a>


               <div className="college-infos">
               <p className="college-info"><img src={cmap} alt="map"/>  Address:</p>
                <p className="college-info">Toyenbee Circular Rd, Dhaka 1000.</p>
                <p className="college-info">Call - +880241070712</p>
                <p className="college-info">notredamecollege@ndc.edu.bd</p>
            </div>
            </div>
            
        </div>

    </section>
        </div>
    );
};

export default College;