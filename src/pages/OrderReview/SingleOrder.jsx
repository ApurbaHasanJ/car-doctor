const SingleOrder = ({ orderReview, handleDelete, handleApprovedOrders }) => {
  const { customerName, email, date, service, status, price, img, _id } =
    orderReview;

  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDelete(_id)}
              className="btn-circle bg-orange-100 hover:bg-orange-200 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask rounded w-24 h-24">
                {img ? (
                  <img src={img} alt="Product img" />
                ) : (
                  <img
                    className="no img found"
                    src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{service}</div>
              <div className="text-lg opacity-50">${price}</div>
            </div>
          </div>
        </td>
        <td>
          {customerName}
          <br />
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>{date}</td>
        <td>
          <div onClick={() => handleApprovedOrders(_id)}>
            {status === "Approved" ? (
              <div className="badge bg-green-600 p-2">Approved</div>
            ) : (
              <div className="badge bg-orange-600 p-2">Pending</div>
            )}
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleOrder;
