import React from 'react';

const PeopleData = ({ people }) => {
    const { name, height, skin_color, gender } = people;
    return (
        <div class="card bg-base-100 shadow-xl mx-10 my-10">
            <div class="card-body">
                <div className='grid grid-cols-2 lg:grid-cols-5'>
                    <div className='flex items-center'>
                        <h2>{name}</h2>
                    </div>
                    <div>
                        <h2 className='font-semibold text-lg'>Height</h2>
                        <h2>{height}</h2>
                    </div>
                    <div>
                        <h2>Skin color</h2>
                        <h2>{skin_color}</h2>
                    </div>
                    <div>
                        <h2>Gender</h2>
                        <h2>{gender}</h2>
                    </div>
                    <div>
                        <button className='btn btn-error'>View Details</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PeopleData;