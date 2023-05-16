import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
  console.log(service);
    const {user} = useContext(AuthContext)
    const handleConfirmOrder = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const order = {
            customerName: name, 
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price,
        }
        console.log(order);

        fetch('https://car-doctor-server-beige-gamma.vercel.app/checkouts', {
            method: 'POST',
            headers: {
                'content-type':'application/json'

            },
            body: JSON.stringify(order)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Order Successfully')
            }
        })

    }



  return (
    <div className="my-container">
      <h2 className="font-bold  lg:text-5xl md:text-3xl text-xl leading-8">
        Check Out for: <span className="text-3xl">{title}</span>
      </h2>
      <form
      onSubmit={handleConfirmOrder}
       className="mt-20 bg-gray-200 rounded-lg p-16">
        <div className="grid grid-cols-2 gap-8">
          <div className="form-control">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              name="date"
              required
              placeholder="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              readOnly
              defaultValue={user?.email}
              placeholder="Enter Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="price"
              defaultValue={'$'+price}
              placeholder="your Phone"
              className="input input-bordered"
            />
          </div>
        </div>
        
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Order Confirm"
            className="btn btn-primary rounded-xl"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
