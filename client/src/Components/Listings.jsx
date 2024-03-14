import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

function Listings() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    axios
      .get("https://worst-rated-movies-webapp.vercel.app/api")
      .then((res) => {
        console.log(res);
        setdata(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
    };
    


//for deleting the element 
    const handleDelete = (_id) => {
      axios
        .delete(`https://worst-rated-movies-webapp.vercel.app/api/delete/${_id}`)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
      console.log("successful", _id);
      fetchData();
      window.location.reload();

    };
 
  return (
    <div className="bg-black grid grid-cols-2">
      {data.length != 0 &&
        data.map((e, i) => (
          <Cards
            key={e._id}
            oldData={e}
            name={e.MovieName}
            img={e.ImgLink}
            rating={e.Rating}
            director={e.Director}
            date={e.Date}
            comments={e.Comments}
            path={e._id}
            onDelete={()=> handleDelete(e._id)
             }
          />
        ))}
    </div>
  );
}

export default Listings;
