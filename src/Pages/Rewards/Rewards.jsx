import { Link, useLoaderData } from "react-router-dom";
import Cards from "../../shared/Cards/Cards";
import BagCards from "../../shared/BagCards/BagCards";
import GeoBoxCard from "../../shared/GeoBoxCards/GeoBoxCard";
import { useState } from "react";
import Swal from "sweetalert2";

const Rewards = () => {
  const fiBooks = useLoaderData();
  const { books, backpacks, geometry_box } = fiBooks;
  const [cart, setCart] = useState([]);
  const [confirmCart, setConfirmCart] = useState([]);
  const [point, setPoint] = useState(100000);
  const [total, setTotal] = useState(0)
  const handleAddCart = (addCart) => {
    const exist = cart?.find(x => x.id === addCart.id);
    if(!exist){
      setCart([...cart, addCart]);
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already Added!",
      });
    }
    
  };
  const handleConfirmCart = (conCart) => {
    const newCart = cart.filter((x) => x.id !== conCart.id);
    // const exist = cart.find(x => x.id === conCart.id);
    setCart(newCart);
    setConfirmCart([...confirmCart, conCart]);
    setPoint(point - conCart.price);
    setTotal(total+conCart.price)
  };
  return (
    <div>
      <div className="mt-32 flex justify-center font-roboto">
        <h1 className="text-5xl text-[#099954] font-bold  bg-white p-8 rounded-2xl shadow-[#099954] shadow-xl">
          Redeem Your Hard Work Here !
        </h1>
      </div>
      {/* product section */}
      <h1 className="text-4xl font-bold text-center mt-10  text-[#153626]">
              Books
            </h1>
      <section className="flex gap-2 items-start">
        <div className="w-3/4">
          <section>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {books.map((book) => (
                <Cards
                  key={book.id}
                  book={book}
                  handleAddCart={handleAddCart}
                ></Cards>
              ))}
            </div>
          </section>
          <section>
            <h1 className="text-4xl font-bold text-center mt-10  text-[#153626]">
              Backpacks
            </h1>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {backpacks.map((bag) => (
                <BagCards
                  key={bag.id}
                  bag={bag}
                  handleAddCart={handleAddCart}
                ></BagCards>
              ))}
            </div>
          </section>
          <section>
            <h1 className="text-4xl font-bold text-center mt-10  text-[#153626]">
              Geometry Box
            </h1>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {geometry_box.map((box) => (
                <GeoBoxCard
                  key={box.id}
                  box={box}
                  handleAddCart={handleAddCart}
                ></GeoBoxCard>
              ))}
            </div>
          </section>
        </div>
        <div className="w-1/4 border rounded-2xl bg-white p-6 mt-8 border-[#099954] shadow-md shadow-[#099954]">
          <div className="flex justify-between border-b-2 mb-4 pb-2  border p-2 rounded-lg border-[#099954] bg-[#D9F3F4] font-roboto text-sm ">
            <p>Selected : <span className="text-[#099954]">{cart.length}</span></p>
            <p>Your Points : <span className="text-[#099954]">{point}</span></p>
          </div>

          <div className="border p-2 rounded-lg border-[#099954] bg-[#D9F3F4] font-roboto">
            <h1 className="text-center text-base pb-2 font-bold underline">Selected Item</h1>
            <div className="grid grid-cols-3 gap-2 border-b-2 pb-1 border-[#099954] font-bold">
              <h1 className="">Item Name</h1>
              <h1>Points</h1>
              <h1></h1>
            </div>
            {cart.map((sCart, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-2 border-b-2 py-1  border-[#099954] items-center font-medium  ">
                <h1>{sCart.name}</h1>
                <h1>{sCart.price}</h1>
                <Link  onClick={() => handleConfirmCart(sCart)} className="btn min-h-0 h-5 bg-transparent border-[#099954] hover:bg-[#099954] hover:text-white">
                  Confirm
                </Link>
              </div>
            ))}
          </div>
          <div className="border p-2 rounded-lg border-[#099954] bg-[#D9F3F4] font-roboto mt-4">
            <h1 className=" text-center text-base pb-2 font-bold underline">Redeem Products</h1>
            <div className="grid grid-cols-2 gap-2 border-b-2 pb-1 border-[#099954] font-bold">
              <h1 className="">Item Name</h1>
              <h1 className="text-end">Points</h1>

            </div>
            <div>
              {
                confirmCart.map((cart, idx) => <div key={idx} className="grid grid-cols-2 gap-2 border-b-2 py-1  border-[#099954] items-center font-medium  ">
                <h1>{cart.name}</h1>
                <h1 className="text-end">{cart.price}</h1>  
              </div>)
              }
              <div className="grid grid-cols-2 gap-2 py-1 font-bold ">
                <h1>Total</h1>
                <h1 className="text-end">{total}</h1>  
              </div>
              
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Rewards;
