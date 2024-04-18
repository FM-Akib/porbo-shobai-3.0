import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useEffect } from "react";

const Layout = () => {
    useEffect(() => {
        window.__be = window.__be || {};
        window.__be.id = "6621381136d41000075bf126";
        (function() {
            var be = document.createElement('script'); 
            be.type = 'text/javascript'; 
            be.async = true;
            be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
            var s = document.getElementsByTagName('script')[0]; 
            s.parentNode.insertBefore(be, s);
        })();
    }, []);
    return (
        <div className="max-w-[1296px] mx-auto">
            <Navbar></Navbar>
            <div>
            <noscript>
                You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a>
            </noscript>
        </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Layout;