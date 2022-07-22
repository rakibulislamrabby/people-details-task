import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PeopleData from '../../component/PeopleData';

const Home = () => {
    const [peoples, setPeoples] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    useEffect(() => {
        const fetchPeoples = async () => {
            const res = await fetch(`https://swapi.dev/api/people/?page=1`)
            const data = await res.json();
            setPeoples(data)
        };
        fetchPeoples();
    }, []);
    const fetchPeoples = async (currentPage) => {
        const res = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        console.log(data.selected);
        let currentPage = data.selected + 1;
        const peoplesServer = await fetchPeoples(currentPage);
        setPeoples(peoplesServer);
    };
    return (
        <div>
            {peoples?.results?.map(people => <PeopleData
                people={people}
            ></PeopleData>)}


            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={9}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"btn-group justify-center mb-10"}
                pageClassName={"btn btn-md"}
                // pageLinkClassName={"btn btn-md"}
                previousClassName={"btn btn-md"}
                activeClassName={"btn-active"}
                // previousLinkClassName={"btn btn-md"}
                nextClassName={"btn btn-md"}
                // nextLinkClassName={"btn btn-md"}
                breakClassName={"btn btn-md"}
            // breakLinkClassName={"btn btn-md"}

            />
        </div>
    );
};

export default Home;