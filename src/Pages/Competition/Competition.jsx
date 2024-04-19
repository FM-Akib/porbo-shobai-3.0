import './styles.css'
import eventhead from '../../assets/hackhathonHead.png';
import e1 from '../../assets/iiuc copy.png';
import e2 from '../../assets/lab.jpeg';
import e3 from '../../assets/muslimh.jpeg';
import e4 from '../../assets/olym.png';
import e5 from '../../assets/ihs.png';
import { Helmet } from 'react-helmet';

const Competition = () => {
    return (
        <div>
        <Helmet>
        <title>Porbo Shobai | Competition</title>
        </Helmet>
          
<div className="Eventhead">
    <img src={eventhead} alt="Competition"/>
</div>

    <section className="Eventmain">
        
       


        {/* <div className="event">
            <div className="event-img">
                <img src={e1} alt="Competition"/>
            </div>
            <div className="event-title">
                <h2 className="event-name">আই-আই-ইউ-সি টেক ফেস্ট ২০২৩.</h2>
                <div className="event-infos">
                <p className="event-info">আন্তর্জাতিক ইসলামিক বিশ্ববিদ্যালয় এর বিজ্ঞান ও প্রকৌশল অনুষদ (FSE) ...</p>
                </div>
            </div>
            <div className="dateAndview">
              <p>২৩শে ডিসেম্বর, ২০২৩</p>
              <a href="https://iscm.edu.bd/" target="_blank"><button className="event-visit-btn" role="button">View</button></a>
            </div>
        </div> */}
        <div className="event">
            <div className="event-img">
                <img src={e2} alt="Competition"/>
            </div>
            <div className="event-title">
                <h2 className="event-name">লিবারেট ল্যাব'স এ-আই হ্যাকাথন</h2>
                <div className="event-infos">
                <p className="event-info">লিবারেট ল্যাবস - এ-আই হ্যাকাথন এ-আই উৎসাহীদের জন্য একটি প্ল্যাটফর্ম ...</p>
                </div>
            </div>
            <div className="dateAndview">
              <p>১৫ই জানুয়ারী, ২০২৪</p>
              <a href="https://liberate-labs.com/" target="_blank"><button className="event-visit-btn" role="button">View</button></a>
            </div>
        </div>
     
        <div className="event">
            <div className="event-img">
                <img src={e3} alt="Competition"/>
            </div>
            <div className="event-title">
                <h2 className="event-name">মুসলিম হাই স্কুল বিতর্ক প্রতিযোগিতা</h2>
                <div className="event-infos">
                <p className="event-info">মুসলিম হাই স্কুল, চট্টগ্রাম। আন্তঃস্কুল বিতর্ক প্রতিযোগিতা আয়োজন করছে ...</p>
                </div>
            </div>
            <div className="dateAndview">
              <p>১০ই জানুয়ারী, ২০২৪</p>
              <a href="https://liberate-labs.com/" target="_blank"><button className="event-visit-btn" role="button">View</button></a>
            </div>
        </div>
        <div className="event">
            <div className="event-img">
                <img src={e4} alt="Competition"/>
            </div>
            <div className="event-title">
                <h2 className="event-name">২২তম বাংলাদেশ গণিত উৎসব</h2>
                <div className="event-infos">
                <p className="event-info">ডাচ-বাংলা ব্যাংক - প্রথম আলো - বাংলাদেশ গণিত উৎসব ...</p>
                </div>
            </div>
            <div className="dateAndview">
              <p>৩১শে ডিসেম্বর, ২০২৩</p>
              <a href="https://liberate-labs.com/" target="_blank"><button className="event-visit-btn" role="button">View</button></a>
            </div>
        </div>

        <div className="event">
            <div className="event-img">
                <img src={e5} alt="Competition"/>
            </div>
            <div className="event-title">
                <h2 className="event-name">ইন্টারন্যাশনাল হোপ স্কুল বাংলাদেশ</h2>
                <div className="event-infos">
                <p className="event-info">ইন্টারন্যাশনাল হোপ স্কুল বাংলাদেশ তাদের ভর্তি কার্যক্রম ...</p>
                </div>
            </div>
            <div className="dateAndview">
              <p>২২শে ডিসেম্বর, ২০২৩</p>
              <a href="https://liberate-labs.com/" target="_blank"><button className="event-visit-btn" role="button">View</button></a>
            </div>
        </div>

    </section>  
        </div>
    );
};

export default Competition;