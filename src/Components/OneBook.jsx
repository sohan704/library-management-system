import Rating from "react-rating";
import { useNavigate } from "react-router-dom";

const OneBook = ({ book }) => {
  const {_id, image, author, category, name, rating } = book;
   const navigate = useNavigate();

  const handleUpdate = ()=> {
    console.log('Here is the update!', _id, name);
    navigate(`/update/${_id}`);
  }

  return (
    <div>
      <div className="flex gap-2 items-center justify-center">
        <div>
          <img className="w-[110px] md:w-[165px] h-[170px] md:h-[255px] object-cover" src={image} alt="" />
        </div>
        <div>
          <p className="text-xl md:text-2xl font-semibold">{name}</p>
          <p className="text-lg md:text-xl font-semibold"> <span className="text-green-500 font-semibold">Author:-</span> {author}</p>
          <div className="badge badge-success">{category.toUpperCase()}</div>

          <div className="py-1 flex items-center gap-3">
            <Rating
              emptySymbol={<img src={`https://i.ibb.co/grM0wQG/star-2.png`} className="w-[20px] h-[20px]" />}
              fullSymbol={<img src={`https://i.ibb.co/3fmX2HL/star-1.png`} className="w-[20px] h-[20px]" />}
              readonly
              initialRating={rating}
            />
            <div><span className="text-xl font-semibold">({rating}/5)</span></div>
          </div>

          <div>
            <button onClick={handleUpdate} className="btn btn-success">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBook;