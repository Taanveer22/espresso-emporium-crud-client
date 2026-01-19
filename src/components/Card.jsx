import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ item }) => {
  // console.log(item);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="max-w-3xl bg-[#f7f4ef] rounded-xl p-6 flex items-center gap-6">
      {/* Left: Image */}
      <div className="w-28 h-36 shrink-0">
        <img
          src={item?.photo || null}
          alt="Espresso Coffee"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Middle: Details */}
      <div className="flex-1 space-y-2">
        <p className="text-gray-800">
          <span className="font-semibold">Name:</span> {item?.name}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Supplier:</span>
          {item?.supplier}
        </p>
      </div>

      {/* Right: Actions */}
      <div className="flex flex-col gap-3">
        <button className="w-9 h-9 rounded-md bg-[#d2b48c] flex items-center justify-center">
          👁
        </button>

        <Link to={`/updateCoffee/${item._id}`}>
          <button className="w-9 h-9 rounded-md bg-[#3b3b3b] text-white flex items-center justify-center">
            ✏️
          </button>
        </Link>

        <button
          onClick={() => handleDelete(item._id)}
          className="w-9 h-9 rounded-md bg-red-500 text-white flex items-center justify-center"
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default Card;
