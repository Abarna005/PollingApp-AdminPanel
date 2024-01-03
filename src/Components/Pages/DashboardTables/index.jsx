import React from 'react';
import CommonTable from '../../Common/Tables/index';
import {TableStyles, ExpireTableStyles } from './style';
import { IconButton, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { ExpireColumns,ExpirePollsDatas } from '../ExpirePolls/data';

export default function DashboardTables({ title,tabletitle, data,columns,ExpireColumns,ExpirePollsDatas}) {
  return (
    <div>
    <TableStyles>
        <div className='contianer' >
            <div style={{marginBottom:"3%"}}>
         <Typography className='title'>{title}
         <IconButton disableTouchRipple={true}>
          <FilterListIcon className='filter-icon'/>
        </IconButton>
          </Typography>
         </div>
         <CommonTable height={'200px'} 
         data={data} columns={columns} />
         </div> 
    </TableStyles> 
    </div>
  )
}