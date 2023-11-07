

const MobileDevices = () => {
  return (
    <div className="my-20">
      <div className="text-5xl my-10 text-center">
        Mobile Responsive
      </div>
      <div className="flex justify-center">

        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                  <img src='https://i.ibb.co/FwSyXts/bookshelf.png'
                    className="w-[100px] h-[100px] object-cover rounded-lg" />
                  <div>
                    <h1 className="font-bold"><a className="normal-case font-bold text-2xl text-green-600"><span className="text-red-500">OG</span>Library</a> </h1>
                    <p className="py-1 text-lg">
                      is a non-profit library of millions of Free books!</p>
                    <button className="btn btn-sm btn-accent">EXPLORE</button>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

       
      </div>


    </div>
  );
};

export default MobileDevices;