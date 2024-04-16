import './styles.css'

import universityHead from '../../assets/universityhead.png';
import u1 from '../../assets/DU.png';  
import u2 from '../../assets/BUET.png';
import u3 from '../../assets/CU.png';
import u4 from '../../assets/IIUC.png';
import map from '../../assets/map.png';
import { Helmet } from 'react-helmet';
const University = () => {
    return (
        <div>
          <Helmet>
        <title>Porbo Shobai | Universities</title>
        </Helmet>     
    <div className="universityhead">
      <img src={universityHead} alt="university Header" />
    </div>


    <section className="main">
        
       


        <div className="university">
            <div className="university-img">
              
                <img src={u1} alt="university Image" />
              </div>
            <div className="university-title">
                <h2 className="university-name">Dhaka University.</h2>
               <a href="http://www.du.ac.bd/" target="_blank"><button className="visit-btn">Visit</button></a>

               <div className="university-infos">
                <p className="university-info"><img src={map} alt="map"/>  Address:</p>
                <p className="university-info">Nilkhet Rd, Dhaka-1000</p>
                <p className="university-info">Call - 029667222</p>
                <p className="university-info">vcoffice@du.ac.bd</p>
            </div>
            </div>
           
        </div>
    
        <div className="university">
            <div className="university-img">
            <img src={u3} alt="university Image" />
              </div>
            <div className="university-title">
                <h2 className="university-name">University of Chittagong</h2>
                <a href="http://cu.ac.bd/" target="_blank"><button className="visit-btn">Visit</button></a>

               <div className="university-infos">
               <p className="university-info"><img src={map} alt="map"/>  Address:</p>
                <p className="university-info">Chittagong University, Chittagong-4331</p>
                <p className="university-info">Call - 02606915-27</p>
                <p className="university-info">registrarcu66@cu.ac.bd</p>
            </div>
            </div>
           
        </div>

        <div className="university">
            <div className="university-img">
            <img src={u2} alt="university Image" />
              </div>
            <div className="university-title">
                <h2 className="university-name">Bangladesh University of Engineering and Technology</h2>
                <a href="http://www.buet.ac.bd/web/#/" target="_blank"><button className="visit-btn">Visit</button></a>

               <div className="university-infos">
               <p className="university-info"><img src={map} alt="map"/>  Address:</p>
                <p className="university-info">Dhaka,Bangladesh</p>
                <p className="university-info">Call - 029665602</p>
                <p className="university-info">support@iict.buet.ac.bd</p>
            </div>
            </div>
          
        </div>

        <div className="university">
            <div className="university-img">
            <img src={u4} alt="university Image" />
              </div>
            <div className="university-title">
                <h2 className="university-name">International Islamic University Chittagong</h2>
                <a href="http://www.iiuc.ac.bd/" target="_blank"><button className="visit-btn">Visit</button></a>


               <div className="university-infos">
               <p className="university-info"><img src={map} alt="map"/>  Address:</p>
                <p className="university-info">Kumira, Chattogram-4318</p>
                <p className="university-info">Call -+8802334461900-7</p>
                <p className="university-info">acad@iiuc.ac.bd </p>
            </div>
            </div>
            
        </div>

    </section>

        </div>
    );
};

export default University;