import React, { useEffect, useState } from 'react';

// Sample data for bags, watches, sunglasses, and sports
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

const sunglassesData = [
    { name: "Sunglasses 1", price: "$30" },
    { name: "Sunglasses 2", price: "$40" },
    // Add more sunglasses items as needed
];

const sportsData = [
    { name: "Sports Item 1", price: "$25" },
    { name: "Sports Item 2", price: "$35" },
    // Add more sports items as needed
];

const Category = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentData, setCurrentData] = useState([]);

    const handleFilter = (type) => {
        if (selectedCategories.includes(type)) {
            setSelectedCategories(selectedCategories.filter(item => item !== type));
        } else {
            setSelectedCategories([...selectedCategories, type]);
        }
    };

    useEffect(() => {
        let newData = [];
        selectedCategories.forEach(category => {
            switch (category) {
                case 'bags':
                    newData = [...newData, ...bagsData];
                    break;
                case 'watches':
                    newData = [...newData, ...watchesData];
                    break;
                case 'sunglasses':
                    newData = [...newData, ...sunglassesData];
                    break;
                case 'sports':
                    newData = [...newData, ...sportsData];
                    break;
                default:
                    break;
            }
        });
        setCurrentData(newData);
    }, [selectedCategories]);

    return (
        <div>
            <button onClick={() => handleFilter('bags')}>Bags</button>
            <button onClick={() => handleFilter('watches')}>Watches</button>
            <button onClick={() => handleFilter('sunglasses')}>Sunglasses</button>
            <button onClick={() => handleFilter('sports')}>Sports</button>

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

export default Category;
