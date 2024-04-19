import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const Cards = ({book,handleAddCart}) => {
    const {name, author, image, totalPages, rating, category, price} = book;
  return (
    <div >
      <div className="card bg-base-100 h-full shadow-[#099954] shadow-lg border border-[#099954]">
        <figure className="px-4 pt-4">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-64 "

          />
        </figure>
        <div className=" card-body ">
          <h2 className="card-title justify-center border-b-2 border-[#099954] pb-3 text-center">
          {name}
          </h2>


          <h3 className="opacity-80 font-roboto"><span className="font-medium text-sm opacity-100 ">Author :</span> {author} </h3>
          <h3 className="opacity-80 font-roboto"><span className="font-medium text-sm opacity-100 ">Total Pages:</span> {totalPages} </h3>
          <h3 className="opacity-80 font-roboto"><span className="font-medium text-sm opacity-100 ">Rating :</span> {rating} </h3>
          <h3 className="opacity-80 font-roboto"><span className="font-medium text-sm opacity-100 ">Category :</span> {category}  </h3>
          <h3 className="opacity-80 font-roboto"><span className="font-medium text-sm opacity-100 ">Purchase points :</span> {price}  </h3>
          <div className="card-actions">
            <Link onClick={() => handleAddCart(book)} className="btn bg-transparent border-[#099954]  text-[#099954] w-full hover:bg-[#099954] hover:text-white">
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
