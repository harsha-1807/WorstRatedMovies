import Cards from './Cards';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Filter() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState('All');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();
        fetchUser();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get("https://worst-rated-movies-webapp.vercel.app/api/");
            setData(res.data.data);
            setFilteredData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchUser = async () => {
        try {
            const res = await axios.get("https://worst-rated-movies-webapp.vercel.app/api/user");
            setUser(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSearchClick = () => {
        if (selectedUser === 'All') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(item => item.User === selectedUser));
        }
    }

    return (
        <div>
            <div className="flex justify-center border-none m-[5vh] ">
                <select className="select border-none w-[10vw] text-black" onChange={e => setSelectedUser(e.target.value)}>
                    <option value="All">All</option>
                    {user.map((item, index) => (
                        <option key={index} onClick={handleSearchClick} >{item.username} </option>
                    ))}
                </select>
                <div className="indicator">
                    <button className="btn join-item" onClick={handleSearchClick}>Search</button>
                </div>
            </div>

            <div>
                <div className=" grid grid-cols-2">
                    {filteredData.length !== 0 &&
                        filteredData.map((item) => (
                            <Cards
                                key={item._id}
                                oldData={item}
                                name={item.MovieName}
                                img={item.ImgLink}
                                rating={item.Rating}
                                director={item.Director}
                                date={item.Date}
                                comments={item.Comments}
                                path={item._id}
                                onDelete={() => handleDelete(item._id)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Filter;
