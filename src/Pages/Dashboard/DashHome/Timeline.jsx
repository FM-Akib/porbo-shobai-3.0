
const Timeline = () => {
    return (
        <>

<section className=" text-gray-800">
<h2 className="text-xl font-semibold pt-5 pl-6">Recent | <span className="text-slate-500 text-sm tracking-wider ">task</span> </h2>
	<div className="container  px-4 py-10 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-12">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-600">
						<h3 className="text-base font-semibold tracking-wide">Completed Physics Vector Chapter. </h3>
						<time className="text-xs tracking-wide uppercase text-gray-600">1 April, 2024</time>
						{/* <p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p> */}
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-600">
						<h3 className="text-base font-semibold tracking-wide">Completed Chemestry chapter 1.</h3>
						<time className="text-xs tracking-wide uppercase text-gray-600">16 March, 2024</time>
						{/* <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p> */}
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-600">
						<h3 className="text-base font-semibold tracking-wide">You are participate in <span className="text-red-600">Liberate labs hackathon</span> .</h3>
						<time className="text-xs tracking-wide uppercase text-gray-600">12 Februery, 2024</time>
						{/* <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p> */}
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-600">
						<h3 className="text-base font-semibold tracking-wide">You defeated our AI challenge Master.</h3>
						<time className="text-xs tracking-wide uppercase text-gray-600">26 January, 2024</time>
						{/* <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p> */}
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-600">
						<h3 className="text-base font-semibold tracking-wide">Completed Chapter 1 General Math.</h3>
						<time className="text-xs tracking-wide uppercase text-gray-600">24 January, 2024</time>
						{/* <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p> */}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </>
    );
};

export default Timeline;