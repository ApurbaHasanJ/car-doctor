import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import SingleOrder from "./SingleOrder";
import { useNavigate } from "react-router-dom";

const OrderReview = () => {
  const { user } = useContext(AuthContext);
  const [orderReviews, SetOrderReviews] = useState([]);
  const navigate = useNavigate();

  const url = `https://car-doctor-server-beige-gamma.vercel.app/checkouts?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('car-access-token')}`
    }
    })
      .then((res) => res.json())
      .then((data) => {
        // solve map is not a function
        if(!data.error){

          SetOrderReviews(data);
        }
        else{
          // but valid system is logout and then navigate
          navigate('/')
        }
        console.log(data);
      });
  }, [url, navigate]);

  //   handle delete products
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://car-doctor-server-beige-gamma.vercel.app/checkouts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Successfully deleted");
            const remaining = orderReviews.filter(
              (orderReview) => orderReview._id !== id
            );
            SetOrderReviews(remaining);
          }
        });
    }
  };

  const handleApprovedOrders = (id) => {
    fetch(`https://car-doctor-server-beige-gamma.vercel.app/checkouts/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = orderReviews.filter(
            (orderReview) => orderReview._id !== id
          );
          const updated = orderReviews.find((orderReview) => orderReview._id === id)
          updated.status = 'Approved';
          const currentOrders = [updated, ...remaining];
          SetOrderReviews(currentOrders)
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Service</th>
            <th>Ordered by</th>
            <th>date</th>
            <th>Status</th>
          </tr>
        </thead>
        {orderReviews.map((orderReview) => (
          <SingleOrder
            key={orderReview._id}
            handleDelete={handleDelete}
            orderReview={orderReview}
            handleApprovedOrders={handleApprovedOrders}
          />
        ))}
      </table>
    </div>
  );
};

export default OrderReview;
