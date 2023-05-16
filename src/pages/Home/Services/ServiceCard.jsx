import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card bg-base-100 drop-shadow-xl border">
      <img
        src={img}
        alt="ServiceImg"
        className="rounded-xl m-5 mb-0 h-[208px]"
      />
      <div className="card-body">
        <h2 className="card-title font-bold text-[#444444]">{title}</h2>
        <div className="text-[#FF3811] flex items-center justify-between">
          <p className="font-semibold text-lg">Price: ${price}</p>
          <div className="ml-auto">
            <Link to={`/checkout/${_id}`}>
              <ArrowRightIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
