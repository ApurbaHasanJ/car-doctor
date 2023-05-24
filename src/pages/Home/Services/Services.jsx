import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useRef } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const searchRef = useRef(null);
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch(`https://car-doctor-server-beige-gamma.vercel.app/services?search=${search}&sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc, search]);


  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value)
  }


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

      <div className="mt-11">
        <div className="form-control mb-3">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              ref={searchRef}
              className="input input-bordered"
            />
            <button className="btn "
            onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button className="btn" onClick={() => setAsc(!asc)}>
          {asc ? "desc" : "asc"}
        </button>
        <div className="grid lg:grid-cols-3 mt-3 md:grid-cols-2  gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <button className="btn-sec  mt-6 lg:mt-11">More Services</button>
      </div>

      {/* service time and address info*/}
      <div className="bg-black">
        <div></div>
      </div>
    </div>
  );
};

export default Services;
