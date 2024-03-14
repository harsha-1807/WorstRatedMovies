import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addpost() {
  const navigate = useNavigate();

  const [newPost, setNewPost] = useState({
    MovieName: "",
    ImgLink: "",
    Rating: 3,
    Date: "",
    Director: "",
  });

  const handleChange = (e, field) => {
    setNewPost({ ...newPost, [field]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://worst-rated-movies-webapp.vercel.app/api/create",
        newPost
      );
      console.log(response.data);
      navigate("/listings");
    } catch (error) {
      console.error("Error fetching :", error);
    }
  };

  return (
    <div className="h-[90vh] w-[70vw] mx-[15vw] mt-[15vh] ">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2 text-white">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Movie Name
            </label>
            <input
              type="text"
              id="first_name"
              value={newPost.MovieName}
              onChange={(e) => handleChange(e, "MovieName")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Movie Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="visitors"
              className="block mb-2 text-sm font-mediumdark:text-white"
            >
              Rating
            </label>
            <input
              type="number"
              step="0.1"
              id="visitors"
              value={newPost.Rating}
              onChange={(e) => handleChange(e, "Rating")}
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg  text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              max={6}
              min={0}
            />
          </div>

          <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium  dark:text-white"
            >
              Image URL
            </label>
            <input
              type="url"
              id="website"
              value={newPost.ImgLink}
              onChange={(e) => handleChange(e, "ImgLink")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Movie poster link"
              required
            />
            
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium  dark:text-white"
            >
              Director
            </label>
            <input
              type="text"
              id="company"
              value={newPost.Director}
              onChange={(e) => handleChange(e, "Director")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Director name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium  dark:text-white"
            >
              Date
            </label>
            <input
              type="string"
              id="phone"
              value={newPost.Date}
              onChange={(e) => handleChange(e, "Date")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="date of release"
              //   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>

          {/* <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Comments
            </label>
            <input
              type="string"
              id="last_name"
              value={newPost.description}
            onChange={(e) => handleChange(e, "description")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="comments for the movie"
              required
            />
          </div> */}
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            {/* <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required /> */}
          </div>
          {/* <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label> */}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-[5px] "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Addpost;
