import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assessts/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../SelectDrop/select";
import axios from "axios";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import iconnheart from "../../assessts/images/heart.png";
import cartimage from "../../assessts/images/cart.png";
import user from "../../assessts/images/user.png";
import Button from "@mui/material/Button";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Nav from "./nav/nav";

const Header = () => {
  const categories = [
    "Milks and Dairies",
    "Wines and Drinks",
    "Clothing & Beauty",
    "Fresh Seafood",
    "Pet food and toys",
    "Fast Food Items",
    "Baking material",
    "Vegetables",
    "Beverages",
  ];

  const [isopendropdown, setIsopendropdown] = useState(false);
  const [countryList, setCountryList] = useState([]);

  // Fetch country data on component mount
  useEffect(() => {
    getCountryData("https://restcountries.com/v3.1/all");
  }, []);

  // Function to fetch country data
  const getCountryData = async (url) => {
    try {
      const res = await axios.get(url);
      if (res && res.data) {
        const countries = res.data.map((item) => item.name.common); // Get country names
        setCountryList(countries); // Update the state with country names
      }
    } catch (error) {
      console.error("Error fetching countries:", error.message);
    }
  };

  return (
    <>
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <img src={logo} alt="Company Logo" />
          </div>

          <div className="col-sm-5">
            <div className="headersearch d-flex align-item-center">
              <Select
                data={categories}
                placeholder={"All Categories"}
                icon={false}
                arrow={<KeyboardArrowDownIcon className="arrow" />}
              />

              <div className="search">
                <input type="text" placeholder="Search for items..." />
                <SearchIcon className="searchIcon cursor" />
              </div>
            </div>
          </div>

          <div className="col-sm-5">
            <div className="ml-auto d-flex align-item-center">
              <div className="countryWrapper">
                <Select
                  data={countryList} // Pass the country list as data
                  placeholder="Your location"
                  icon={<LocationOnOutlinedIcon style={{ opacity: "0.7" }} />}
                  arrow={<KeyboardArrowDownIcon className="arrow2" />}
                />
              </div>
              <ClickAwayListener onClickAway={() => setIsopendropdown(false)}>
                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span>
                      <img src={iconnheart} alt="Heart Icon" />
                      Compare
                    </span>
                  </li>
                  <li className="list-inline-item ">
                    <span>
                      <img src={iconnheart} alt="Wishlist Icon" />
                      Wishlist
                    </span>
                  </li>
                  <li className="list-inline-item ">
                    <span>
                      <img src={cartimage} alt="Cart Icon" />
                      Cart
                    </span>
                  </li>
                  <li className="list-inline-item ">
                    <span onClick={() => setIsopendropdown(!isopendropdown)}>
                      <img src={user} alt="User Icon" />
                      Account
                    </span>
                    {isopendropdown && (
                      <ul className="dropdownmenu">
                        <li>
                          <Button>
                            <Person2OutlinedIcon />
                            My Account
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <LocationSearchingOutlinedIcon />
                            Order tracking
                          </Button>{" "}
                        </li>
                        <li>
                          <Button>
                            <SettingsOutlinedIcon />
                            Setting
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <LoginOutlinedIcon />
                            Log out
                          </Button>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </ClickAwayListener>
            </div>
          </div>
        </div>
      </div>
    </header>
    <Nav/>
   </>
  );
};

export default Header;
