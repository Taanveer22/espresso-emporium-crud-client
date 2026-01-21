import Swal from "sweetalert2";
// Access the base URL from the .env file
const API_BASE_URL = import.meta.env.VITE_API_URL;

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(newCoffee);

    // send data to server
    fetch(`${API_BASE_URL}/coffees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };
  return (
    <div>
      <section className="w-11/12 mx-auto">
        <form onSubmit={handleAddCoffee}>
          {/* 1st */}
          <div className="flex items-center justify-between gap-6 my-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Coffee Name</legend>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Availbale Quantity</legend>
              <input
                name="quantity"
                type="text"
                className="input w-full"
                placeholder="Availbale Quantity"
              />
            </fieldset>
          </div>
          {/* 2nd */}
          <div className="flex items-center justify-between gap-6 mb-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Supplier</legend>
              <input
                name="supplier"
                type="text"
                className="input w-full"
                placeholder="Supplier"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Taste</legend>
              <input
                name="taste"
                type="text"
                className="input w-full"
                placeholder="Taste"
              />
            </fieldset>
          </div>
          {/* 3rd */}
          <div className="flex items-center justify-between gap-6 mb-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Category</legend>
              <input
                name="category"
                type="text"
                className="input w-full"
                placeholder="Category"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Details</legend>
              <input
                name="details"
                type="text"
                className="input w-full"
                placeholder="Details"
              />
            </fieldset>
          </div>
          {/* 4th */}
          <div className="mb-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo Url</legend>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="Photo Url"
              />
            </fieldset>
          </div>
          {/* btn */}
          <div>
            <button className="btn btn-success w-full">Add Coffee</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCoffee;
