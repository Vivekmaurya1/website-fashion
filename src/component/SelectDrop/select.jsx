import React, { useEffect, useState } from "react";
import {ClickAwayListener} from "@mui/base/ClickAwayListener";
import "./select.css";

const Select = ({ data, placeholder, icon, arrow }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);
  const [listData, setListData] = useState(data);

  // Effect to update the list when the `data` prop changes
  useEffect(() => {
    setListData(data);
  }, [data]);

  // Open/close dropdown
  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
    setListData(data); // Reset the list to the original data when opening the dropdown
  };

  // Close the dropdown and select an item
  const closeSelect = (index, name) => {
    setSelectedIndex(index);
    setIsOpenSelect(false);
    setSelectedItem(name);
  };

  // Filter the list based on the search input
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredList = data.filter((item) => 
      item.toLowerCase().includes(keyword)
    );
    setListData(filteredList);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className="selectdropWrapper cursor position-relative">
        {icon}
        <span className="openselect" onClick={openSelect}>
          {selectedItem.length > 14 ? selectedItem.substr(0, 14) + "..." : selectedItem}
          {arrow}
        </span>

        {isOpenSelect && (
          <div className="SelctDrop">
            <div className="searchField">
              <input type="text" placeholder="Search..." onChange={filterList} />
            </div>
            <ul className="searchresults">
              <li
                key={0}
                onClick={() => closeSelect(0, placeholder)}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                {placeholder}
              </li>
              {listData.map((item, index) => (
                <li
                  key={index + 1}
                  onClick={() => closeSelect(index + 1, item)}
                  className={`${selectedIndex === index + 1 ? "active" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
