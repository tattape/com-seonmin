import React from 'react';

const Nav = () => {
    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 100,
        })
    }

    return (
        <ul className="mainmenu">

            <li className="has-droupdown">
                {window.location.pathname !== "/" ?
                    <a href='/' >Portfolio</a>
                    : <a href='#portfolio-part' onClick={handleClick}>Portfolio</a>
                }
            </li>

            <li className="has-droupdown">
                {window.location.pathname !== "/" ?
                    <a href='/' >Skills</a>
                    : <a href='#skills-part' onClick={handleClick}>Skills</a>
                }
            </li>

            <li className="has-droupdown">
                <a href='#contact-part' onClick={handleClick}>Contact</a>
            </li>
        </ul>
    )
}
export default Nav;
