import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Home = () => {
  const coffeesData = useLoaderData();
  // console.log(coffeesData);
  const [allCoffees, setAllCoffees] = useState(coffeesData);
  // console.log(allCoffees);
  return (
    <div>
      <h1 className="text-3xl font-medium text-center mt-5">
        Coffees Available : {coffeesData.length}
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-11/12 mx-auto">
        {allCoffees.map((item) => (
          <Card
            item={item}
            allCoffees={allCoffees}
            setAllCoffees={setAllCoffees}
            key={item._id}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
