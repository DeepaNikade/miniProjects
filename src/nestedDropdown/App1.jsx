import React from 'react';
import Dropdown from './NestedDropdown';

const App1 = () => {
  const dropdownData = [
    {
      title: 'Option 1',
      subItems: [
        { title: 'Option 1.1', subItems: [] },
        { title: 'Option 1.2', subItems: [] },
      ],
    },
    {
      title: 'Option 2',
      subItems: [
        {
          title: 'Option 2.1',
          subItems: [
            { title: 'Option 2.1.1', subItems: [] },
            { title: 'Option 2.1.2', subItems: [] },
          ],
        },
        { title: 'Option 2.2', subItems: [] },
      ],
    },
  ];

  return (
    <div>
      <ul>
        {dropdownData.map((menu, index) => (
          <Dropdown items={menu} key={index} depthLevel={0} />
        ))}
      </ul>
    </div>
  );
};

export default App1;
