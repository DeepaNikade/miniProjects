import React, { useState } from 'react';

const Dropdown = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(prev => !prev);
  };

  return (
    <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <button
        type="button"
        aria-expanded={dropdown ? 'true' : 'false'}
        onClick={toggleDropdown}
      >
        {items.title}
        {depthLevel > 0 && <span> &raquo;</span>}
      </button>
      {dropdown && (
        <ul>
          {items.subItems.map((subItem, index) => (
            <Dropdown items={subItem} key={index} depthLevel={depthLevel + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
