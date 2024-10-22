import React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import "./nav.css";
const nav=()=>{
    return(
        <div className="nav d-flex align-items-center">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col=sm-3 part1">
                        <Button className="bg-g text-white catTab"><GridViewOutlinedIcon/> &nbsp;Browse all categories
                            <KeyboardArrowDownIcon/>
                        </Button>
                    </div>
                    <div className="col-sm-6 part2">
                        <nav>
                            <ul className="list list-inline">
                                <li className="list-inline-item-center"> 

                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-sm-3 part3">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default nav;