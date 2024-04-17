import { MdStars } from "react-icons/md";
import { GiSpellBook } from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import LineCharts from "../Charts/LineCharts";
import Timeline from "./Timeline";
import RadarCharts from "../Charts/RadarCharts";
import NewsUpdate from "./NewsUpdate";
import Task from "./Task";
import Projects from "./Projects";



const DashHome = () => {
    return (
        <div className="grid grid-cols-11">

            <div className="col-span-7  p-2">

            <div className="mt-1 flex flex-wrap justify-center items-center gap-4">
            
            <a href="#"
                className="bg-white flex h-28 w-52 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                <div className="flex flex-row items-center justify-center">
                    
                    <MdStars className="mr-3 text-5xl text-orange-500" />

                    <span className="font-bold text-2xl text-gray-600"> 5000 </span>
                </div>

                <div className="mt-2 text-sm text-gray-400">Total Points | <span className="text-lime-600">Legend</span></div>
            </a>

            
            <a href="#"
                className="bg-white flex h-28 w-52 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                <div className="flex flex-row items-center justify-center">
                    
                    <GiSpellBook className="mr-3 text-5xl text-lime-600" />


                    <span className="font-bold text-2xl text-gray-600"> 13 </span>
                </div>

                <div className="mt-2 text-sm text-gray-400">Total Books Owned</div>
            </a>

            
            <a href="#"
                className="bg-white flex h-28 w-52 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                <div className="flex flex-row items-center justify-center">
                    
                <BiTask className="mr-3 text-5xl text-orange-500" />

                    <span className="font-bold text-2xl text-gray-600"> 50 </span>
                </div>

                <div className="mt-2 text-sm text-gray-400">Task Complete</div>
            </a>
            </div>

           <div className="bg-white p-4 mt-6 mx-8  shadow-sm">
            <h2 className="text-xl font-semibold">Task | <span className="text-slate-500 text-sm tracking-wider ">Reports</span> </h2>
            <div className="pt-12">
            <LineCharts></LineCharts>
            </div>
           </div>


           <div className="bg-white p-4 mt-6 mx-8  shadow-sm">
            <h2 className="text-xl font-semibold">Incompleted | <span className="text-slate-500 text-sm tracking-wider ">task</span> </h2>
            <div className="pt-12 pb-7">
            <Task></Task>
            </div>
           </div>


           <div className="bg-white p-4 mt-6 mx-8  shadow-sm">
            <h2 className="text-xl font-semibold">My Projects | <span className="text-slate-500 text-sm tracking-wider ">go youtube</span> </h2>
            <div className="px-5 pb-2">
            <Projects></Projects>
            </div>
           </div>

   </div>



        <div className="col-span-4 ">
         
         <div className="bg-white rounded">
            <Timeline></Timeline>
         </div>

         <div className="bg-white rounded my-6 ">
         <h2 className="text-xl pt-5 pl-3 font-semibold">Analysis | <span className="text-slate-500 text-sm tracking-wider ">by marks</span> </h2>
            <RadarCharts></RadarCharts>
         </div>
        
         <div className="bg-white rounded my-6  ">
         <h2 className="text-xl pt-5 pl-3 font-semibold">News & Updates | <span className="text-slate-500 text-sm tracking-wider ">today</span> </h2>
            <NewsUpdate></NewsUpdate>
         </div>

        </div>
        </div>
    );
};

export default DashHome;