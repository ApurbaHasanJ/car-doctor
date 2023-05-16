import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-beige-gamma.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-32 my-container">
      {/* section header */}
      <div className="text-center">
        <h5 className="font-bold md:text-lg text-sm mb-[20px] text-[#FF3811]">
          Service
        </h5>
        <h2 className="font-bold  lg:text-5xl md:text-3xl text-xl leading-8">
          Our Service Area{" "}
        </h2>
        <p className="lg:text-base text-sm w-7/12 mx-auto  text-[#737373] mt-[20px]">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don&apos;t look even slightly
          believable.{" "}
        </p>
      </div>

      {/* section body */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-11 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="mx-auto flex justify-center">
        <button className="btn-sec  mt-6 lg:mt-11">
          More Services
        </button>
      </div>

      {/* service time and address info*/}
      <div className="bg-black">
        <div>
          
        </div>

      </div>

    </div>
  );
};

export default Services;
