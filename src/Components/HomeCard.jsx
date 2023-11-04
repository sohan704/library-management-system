const HomeCard = ({ card }) => {
  const { Category, image } = card;
  return (
    <div>
      <div className="card w-11/12 bg-base-100 border-2 border-green-200 shadow-sm">
        <div>
          <figure className="px-5 pt-5">
            <img src={image} alt="Shoes" className="rounded-xl object-cover lg:w-[381px] lg:h-[482px]" />
          </figure>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl">{Category.toUpperCase()}</h2>

          <div className="card-actions">
            <button className="btn btn-accent">MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;