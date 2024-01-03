import React,{useState} from 'react';
import CommonTable from '../../Common/Tables/index';
import { IconButton, Typography } from '@mui/material';
import {ExpireTableStyles} from './style';
import StyledButton from '../../Common/Buttons/index';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {ExpireColumns,ExpirePollsDatas} from '../ExpirePolls/data';

export default function ExpiredPolls({ showArrowContainer ,buttonTitle,showButton}) {
  const [showAll, setShowAll] = useState(false);
  const displayedUserData = showAll ? ExpirePollsDatas : ExpirePollsDatas.slice(0, 6);  
  return (
    <ExpireTableStyles>
    <div>
       <div className='contianer' >
            <div style={{marginBottom:"1%"}}>
         <Typography className='title'>Expire Polls
          </Typography>
         </div>
         <CommonTable height={'auto'}  data={displayedUserData} columns={ExpireColumns} />
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
    </ExpireTableStyles>
  )
}