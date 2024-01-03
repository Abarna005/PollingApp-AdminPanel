import React from 'react';
import CommonTable from '../../Common/Tables/index';
import {CatReqStyles} from './style';
import { Typography } from '@mui/material';
import {RequestColumns,RequestDatas} from './data';

export default function CategoryRequests() {
  return (
      <CatReqStyles>
        <div className='main-container'>
            <Typography className='title'>Category Requests</Typography>
            <div className='tablewrapper'>
        <CommonTable columns={RequestColumns} data={RequestDatas} />
        </div>
        </div>
      </CatReqStyles>
  );
}