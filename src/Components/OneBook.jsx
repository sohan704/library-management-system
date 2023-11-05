const OneBook = ({book}) => {
  const {image, author, category, name, rating} = book;
  return (
    <div>
       <div className="flex">
          <div>
            <img className="w-[110px] md:w-[165px] h-[170px] md:h-[255px] object-cover" src={image} alt="" />
          </div>
          <div>
            
          </div>
       </div>
    </div>
  );
};

export default OneBook;