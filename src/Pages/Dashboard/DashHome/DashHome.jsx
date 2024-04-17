import { MdStars } from "react-icons/md";
import { GiSpellBook } from "react-icons/gi";
import { BiTask } from "react-icons/bi";



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


   </div>



        <div className="col-span-4 bg-green-600 p-2">
asdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
        </div>
        </div>
    );
};

export default DashHome;