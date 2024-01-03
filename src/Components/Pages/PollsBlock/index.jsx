import React,{useState} from 'react';
import CommonTable from '../../Common/Tables/index';
import { IconButton, Typography } from '@mui/material';
import { BlockTableStyles } from './style';
import StyledButton from '../../Common/Buttons/index';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {BlockPollColumns,BlockPollsDatas} from './data';

export default function BlockPolls({ showButton}) {
  const [showAll, setShowAll] = useState(false);
  const displayedUserData = showAll ? BlockPollsDatas : BlockPollsDatas.slice(0, 6);  
  return (
    < BlockTableStyles >
    <div>
       <div className='contianer' >
            <div style={{marginBottom:"1%"}}>
         <Typography className='title'>Block Polls
          </Typography>
         </div>
         <CommonTable height={'auto'}  data={displayedUserData} columns={BlockPollColumns} />
            <div className="arrow-container">
              <IconButton onClick={() => setShowAll(!showAll)} disableTouchRipple={true}>
                {showAll ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </IconButton>
            </div>
         </div>
    </div>
    </ BlockTableStyles >
  )
}