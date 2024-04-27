import React, { useEffect, useState } from 'react';

// Sample data for bags and watches
const bagsData = [
    { name: "Bag 1", price: "$50" },
    { name: "Bag 2", price: "$60" },
    // Add more bag items as needed
];

const watchesData = [
    { name: "Watch 1", price: "$100" },
    { name: "Watch 2", price: "$120" },
    // Add more watch items as needed
];

// const All = [
//   { name: "Bag 1", price: "$50" },
//   { name: "Bag 2", price: "$60" },
//   { name: "Watch 1", price: "$100" },
//   { name: "Watch 2", price: "$120" },

// ]



const List = () => {
    const [currentData, setCurrentData] = useState([]);

    const handleFilter = (type) => {
        if (type === 'bags') {
            setCurrentData(bagsData);
        } else if (type === 'watches') {
            setCurrentData(watchesData);
        }
    };

    useEffect(()=>{
      setCurrentData([...bagsData,...watchesData]);
    },[])
    return (
        <div>
            <button onClick={() => handleFilter('bags')}>Bags</button>
            <button onClick={() => handleFilter('watches')}>Watches</button>
            
            <div>
                {currentData.map((item, index) => (
                    <div key={index}>
                        <p>{item.name} - {item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;