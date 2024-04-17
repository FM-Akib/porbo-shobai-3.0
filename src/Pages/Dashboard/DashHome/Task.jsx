

const Task = () => {
    return (
        <>
         <div className="block w-full overflow-x-auto  border ">
    <table className="items-center w-full bg-transparent border-collapse">
        <thead>
            <tr>
                <th
                    className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                    Incomplete task</th>
                <th
                    className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                    Time</th>
                <th
                    className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"> Status
                </th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
            <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Math Olympiad 2021 Questions</th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    30 min</td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">30%</span>
                        <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div className="bg-cyan-600 h-2 rounded-sm" ></div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                Essay: The Vibrant Tapestry of Bangladeshi Culture</th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    20 min</td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">24%</span>
                        <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div className="bg-orange-300 h-2 rounded-sm" ></div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Quiz Hero: General Knowledge
                </th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    5 min</td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">18%</span>
                        <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div className="bg-teal-400 h-2 rounded-sm" ></div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Challenge with AI Master
                </th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    2 min </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">12%</span>
                        <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div className="bg-pink-600 h-2 rounded-sm" ></div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"> Task Module-1 'Physics - Vector'
                </th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">10 min
                </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">9%</span>
                        <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div className="bg-indigo-600 h-2 rounded-sm" ></div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>   
        </>
    );
};

export default Task;