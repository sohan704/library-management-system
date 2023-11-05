import Rating from "react-rating";
import { useNavigate } from "react-router-dom";


const DetailsCard = ({ card }) => {
  const { _id, image, name, author, category, rating } = card;
  
  const navigate = useNavigate();
  
  const isDisabled = ""; //use "btn-disabled"

  const handleDetails = () => {
     navigate(`/book/${category}/${_id}`);
  }

  return (
    <div className="shadow-lg flex gap-5 rounded-lg p-3 md:p-5 mx-auto">
      <div>
        <img className="w-[110px] md:w-[220px] h-[170px] md:h-[340px] object-cover" src={image} alt="" />
      </div>
      <div>
        <p className="text-xl md:text-3xl font-semibold py-3">{name}</p>
        <p className="text-lg md:text-xl py-1"><span className="font-semibold text-red-500">Writer:- </span>{author}</p>
        <div className="badge badge-lg badge-accent">{category.toUpperCase()}</div>

        <div className="py-5 flex items-center gap-3">
          <Rating
            emptySymbol={<img src={`https://i.ibb.co/grM0wQG/star-2.png`} className="w-[20px] h-[20px]" />}
            fullSymbol={<img src={`https://i.ibb.co/3fmX2HL/star-1.png`} className="w-[20px] h-[20px]" />}
            readonly
            initialRating={rating}
          />
          <div><span className="text-xl font-semibold">({rating}/5)</span></div>
        </div>

        <div>
          <button onClick={handleDetails} className={`btn ${isDisabled} btn-accent`}>Details</button>
        </div>
      </div>
    </div>
  );
};




export default DetailsCard;