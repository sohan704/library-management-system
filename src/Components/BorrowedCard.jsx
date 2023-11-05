import axios from "axios";

const BorrowedCard = ({ book, afterDelete }) => {
  const { borrowedDate, bookName, image, category, _id, id, name, email, returnDate, quantity } = book;
  
  const newQuantity = quantity + 1;

  const handleReturn = (_id) => {
    
    const quantity = newQuantity;

    const book = {borrowedDate, bookName, _id, image, category, id, name, email, returnDate, quantity }
     

    axios.patch('http://localhost:5000/book',book)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
  
    axios.delete(`http://localhost:5000/borrowed/${_id}`)
    .then(response=> {
      console.log(response.data)
      afterDelete(id);
    })
    .catch(error => console.error(error));
  }

  return (
    <div className="flex items-center gap-5 shadow-xl">
      <div>
        <img className="w-[110px] md:w-[220px] h-[170px] md:h-[340px] object-cover" src={image} alt="" />
      </div>

      <div className="text-lg md:text-2xl ">
         <p className="font-semibold">{bookName}</p>
         <p className="text-red-600">Borrowed:- {borrowedDate}</p>
         <p className="text-green-600">Return Date:- {returnDate}</p>
         <button onClick={()=> {handleReturn(_id)}} className="btn btn-success">Return</button>
      </div>
      

    </div>
  );
};

export default BorrowedCard;