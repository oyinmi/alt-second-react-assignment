import React, { useEffect, useState } from "react";
import './style.css';


const pageItems = 10


function Users () {
    const [users, setUsers] = useState ([]);
    const [items, setItems] = useState ([]);
    const [currentPage, setCurrentPage] = useState(0);
    

    useEffect(() => {
        const url = `https://randomuser.me/api/?results=50`;

        // async function fetchUsers () {
        //     const response = await fetch(`https://randomuser.me/api/?results=100`);
        //     const fetchedUsers = await response.json(response);
        //     console.log(fetchedUsers)
        //      setUsers(fetchedUsers.results);
        // }

        const fetchUsers = async () => {
            try{
                const response = await fetch(url);
                const fetchedUsers = await response.json();
                setUsers(fetchedUsers.results);
                setItems(fetchedUsers.results.slice(0, pageItems));
            } catch (error){
                console.log("error", error)
            }
        };

        fetchUsers();
    }, []);


    const handleNext = (event) => {
        event.preventDefault();
        if (currentPage < 4) {
            setItems(users.slice((currentPage + 1) * pageItems, pageItems * (currentPage + 1) + pageItems))
            setCurrentPage(prevPage => prevPage + 1);
        }
    }

    const handlePrevious = (event) => {
        event.preventDefault();
        if (currentPage > 0) {
            setItems(users.slice((currentPage - 1) * pageItems, pageItems * (currentPage - 1) + pageItems))
            setCurrentPage(prevPage => prevPage - 1);
        }
    }

    const onNumberClick = (number) => {
        return (event) => {
            event.preventDefault();
            setItems(users.slice((number - 1) * pageItems, pageItems * (number - 1) + pageItems))
            setCurrentPage(number - 1);
        }
    }

    return(
        <div className="container">
            <nav className="navcon">
                <Link to="error404">About</Link>
                <Link to="/">User</Link>
            </nav>

            <div className="userCon">
                {items.map(user => (
                    <div className="user">
                        <img src={user.picture.medium}/>
                        {user.name.title} {user.name.first} {user.name.last}
                        {/* {user.phone} */}
                    </div>
                ))}
            </div>

            <div className="paginate">
                <button onClick={handlePrevious}>Prev</button>
                <button onClick={onNumberClick(1)}>1</button>
                <button onClick={onNumberClick(2)}>2</button>
                <button onClick={onNumberClick(3)}>3</button>
                <button onClick={onNumberClick(4)}>4</button>
                <button onClick={onNumberClick(5)}>5</button>
                <button onClick={handleNext}>Next</button>
            </div>

        </div>
    );
}


export default Users;
