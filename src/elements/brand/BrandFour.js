import React from 'react';

const BrandList = [
    {
        image: './images/brand/react_logo.png',
        width: "150px",
    },
    {
        image: './images/brand/node_logo.png',
        width: "120px",
    },
    {
        image: './images/brand/javascript_logo.png',
        width: "120px",
    },
    {
        image: './images/brand/html_logo.png',
        width: "150px",
    },
    {
        image: './images/brand/css_logo.png',
        width: "100px",
    },
    {
        image: './images/brand/figma_logo.png',
        width: "150px",
    },

]

const BrandFour = ({ brandStyle }) => {
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((data, index) => (
                <li key={index}>
                    <a ><img className='brand-img' style={{ width: data.width, filter: "grayscale(1) invert(1)" }} src={`${data.image}`} alt="Brand Image" /></a>
                </li>
            ))}
        </ul>
    )
}

export default BrandFour;
