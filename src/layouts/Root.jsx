import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Root = () => {
  const coffeesData = useLoaderData();
  console.log(coffeesData);
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-11/12 mx-auto">
        {coffeesData.map((item) => (
          <Card item={item} key={item._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Root;
