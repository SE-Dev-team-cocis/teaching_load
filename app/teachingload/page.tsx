"use client";
import React, { useState, useRef } from "react";

interface ListItem {
  id: number;
  name: string;
  isChecked: boolean;
}

const MyComponent: React.FC = () => {
  const initialList: ListItem[] = [
    { id: 1, name: "Item 1", isChecked: false },
    { id: 2, name: "Item 2", isChecked: false },
    { id: 3, name: "Item 3", isChecked: false },
    { id: 4, name: "Item 4", isChecked: false },
    { id: 5, name: "Item 5", isChecked: false },
    { id: 6, name: "Item 6", isChecked: false },
    { id: 7, name: "Item 7", isChecked: false },
  ];

  //   const listRef = useRef<ListItem[]>(initialList);
  const [list, setList] = useState<ListItem[]>(initialList);

  const [searchTerm, setSearchTerm] = useState("");

  const handleCheckboxChange = (itemId: number) => {
    // listRef.current = listRef.current.map((item) =>
    const updatedList = list.map((item) =>
      item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
    );
    setList(updatedList);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  //   const filteredList = listRef.current.filter((item) =>
  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(list);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchInputChange}
        placeholder="Search"
      />
      {filteredList.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.isChecked}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
