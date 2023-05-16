import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="my-container">
      {/* banner */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.postimg.cc/43gKsJmT/1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 right-16 bottom-1 gap-5 ">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-square rounded-full">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.postimg.cc/sXn1Y7KV/4.jpg" className="w-full" />
          <div className="absolute flex justify-between  transform -translate-y-1/2 right-16 bottom-1 gap-5">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* About Us section*/}
      <AboutUs/>

      {/* Service section */}
      <Services/>
      
    </div>
  );
};

export default Home;
