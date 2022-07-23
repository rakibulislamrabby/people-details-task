import React, { useEffect, useState } from 'react';

const PeopleDetails = () => {
    const [details, setDetails] = useState([]);
    // useEffect(() => {
    //     fetch(``)
    // }, [])
    return (
        <div class="card bg-base-300 shadow-xl mx-18 my-10">
            <div class="card-body">
                <div className='grid grid-cols-2 lg:grid-cols-5'>
                    <div className='flex items-center'>
                        <h2>Name</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                    </div>
                    <div>
                        <h2 className='font-semibold text-lg'>Height</h2>
                        <h2>454</h2>
                    </div>
                    <div>
                        <h2 className='font-semibold text-lg'>Skin color</h2>
                        <h2>sky-eeee</h2>
                    </div>
                    <div>
                        <h2 className='font-semibold text-lg'>Gender</h2>
                        <h2>male</h2>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PeopleDetails;