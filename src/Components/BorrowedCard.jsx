const BorrowedCard = ({ book }) => {
  const { borrowedDate, bookName, image, category, id, name, email, returnDate, quantity } = book;
  return (
    <div className="flex items-center gap-5 shadow-xl">
      <div>
        <img className="w-[110px] md:w-[220px] h-[170px] md:h-[340px] object-cover" src={image} alt="" />
      </div>

      <div className="text-lg md:text-2xl ">
         <p className="font-semibold">{bookName}</p>
         <p className="text-red-600">Borrowed:- {borrowedDate}</p>
         <p className="text-green-600">Return Date:- {returnDate}</p>
         <button className="btn btn-success">Return</button>
      </div>
      

    </div>
  );
};

export default BorrowedCard;