import React,{useState} from 'react';
import CommonTable from '../../Common/Tables/index';
import { IconButton, Typography } from '@mui/material';
import {SkipTableStyles} from './style';
import StyledButton from '../../Common/Buttons/index';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {SkippColumns,SkippPollsDatas} from './data';


export default function SkippedPolls({ showArrowContainer ,buttonTitle,showButton}) {
  const [showAll, setShowAll] = useState(false);
  const displayedUserData = showAll ? SkippPollsDatas : SkippPollsDatas.slice(0, 6);  
  return (
    <SkipTableStyles>
    <div>
       <div className='contianer' >
            <div style={{marginBottom:"1%"}}>
         <Typography className='title'>Skipped Polls
          </Typography>
         </div>
         <CommonTable height={'auto'}  data={displayedUserData} columns={SkippColumns} />
         {showButton && (
            <div className='button-container'>
              <StyledButton
                title={buttonTitle}
                textcolor={"white"}
                fontWeight={'bold'}
                fontSize={14}
                letterspacing={1}
                textTransform={'none'}
                className={'button-style'}
              />
            </div>
          )}
            <div className="arrow-container">
              <IconButton onClick={() => setShowAll(!showAll)} disableTouchRipple={true}>
                {showAll ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </IconButton>
            </div>
         </div>
    </div>
    </ SkipTableStyles>
  )
}