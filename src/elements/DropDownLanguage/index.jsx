import React, {useState} from 'react';

const languages = ["AM","RU", "EN"]

const DropDownLanguage = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState(languages[0]);

    const handleClick = () => {
        setOpen(!open);
    }

    const handleText = (evant) => {
        setText(evant.currentTarget.textContent);
    }

    const itemList = () => {
        const list = languages.map((item) => (
            <div onClick={handleText} className='dropdown-item' key={item.toString()}>{item}</div>)
        )
        return (
            <div className="dropdown-items">{list}</div>
        )

    }


    return (

        <div className={open ? 'dropdown active' : 'dropdown'} onClick={handleClick}>
            <div className="dropdown-label">
                {!text ? 'Select Race' : text}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" width="12" height="8" fill='none'>
                    <path opacity='0.5' d='M2 2L6 6L10 2' stroke='white' strokeWidth='1.5' strokeLinecap='square'/>
                </svg>
            </div>
            {itemList(languages)}
        </div>
    );
};

export default DropDownLanguage;