import axios from "axios";
import swal from "sweetalert";

const BorrowedCard = ({ book, mainBooks, afterDelete }) => {
  const { borrowedDate, bookName, image, category, _id, id, name, email, returnDate, quantity } = book;
  
  // const newQuantity = quantity + 1;

  const neededBook = mainBooks?.find(book=> book._id === id);
  console.log(neededBook);

   

 
    const {quantity: mainQuantity} = neededBook || {quantity: 0};

    console.log('MAIN QUANTITY', mainQuantity);
  



  const handleReturn = (_id) => {
    
    const quantity = mainQuantity + 1;

    const book = {borrowedDate, bookName, _id, image, category, id, name, email, returnDate, quantity }
    


    axios.patch('http://localhost:5000/book',book,{withCredentials:true})
    .then(response => {
      console.log(response.data);
      swal("Book Returned!", "Thanks for reading!", "success");
      
    })
    .catch(error => {
      console.error(error);
      swal("Sorry!", "something went wrong!", "error");
    });
  
    axios.delete(`http://localhost:5000/borrowed/${_id}`,{withCredentials:true})
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