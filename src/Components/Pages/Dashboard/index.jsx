import React from 'react'
import DashboardTables from '../DashboardTables';
import CommonTable from '../../Common/Tables';
import {ExpireTableStyles} from './style';
import ExpiredPolls from '../ExpirePolls';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {RecentPollsDatas, Recentcolumns, PopularPollsDatas, PopularColumns} from '../DashboardTables/data';
import {ExpireColumns,ExpirePollsDatas} from '../ExpirePolls/data';
import {SkippPollsDatas,SkippColumns} from '../SkippsPolls/data';
import { Typography } from '@mui/material';
import StyledButton from '../../Common/Buttons';

export default function Dashboard() {
  
  return (
 <>
   <Container xs="12" sm="12" md="12" offset={4} >
 <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
 <div style={{ filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
    borderRadius:"10px",
    backgroundColor:"white",
    marginTop:"2%",
    padding:"2%",
   
    }}>
    <div style={{ display: 'flex', gap: '3%',height:"auto",justifyContent:"center",alignItems:"center" }}>
      <DashboardTables title="Recent Polls" data={RecentPollsDatas} columns={Recentcolumns}/>
      <DashboardTables title="Popular Polls" data={PopularPollsDatas} columns={PopularColumns} />
    </div>

    <ExpireTableStyles>
   <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        <div className='contianer' style={{width:"77vw",}}>
            <div style={{marginBottom:"3%" }}>
                <Typography className='title'>{'Expired polls'}</Typography>
            </div>
            <CommonTable 
                data={ExpirePollsDatas.slice(0, 3)}
                columns={ExpireColumns} 
            />
             <div>
              <div className='button-container'>
              <Link to="/expirepolls">
                  <StyledButton
                    className={'button-styles'}
                    title={'View More'}
                    textTransform={'none'}
                    fontSize={12 }
                    textcolor={'white'}
                    letterspacing={2}
                    fontWeight={'bold'}
                  />
                </Link>
          </div>
        </div>
        </div>
   </div>
</ExpireTableStyles>
{/* skipped polls */}
<ExpireTableStyles>
   <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        <div className='contianer' style={{width:"77vw",}}>
            <div style={{marginBottom:"3%" }}>
                <Typography className='title'>{'Skipped polls'}</Typography>
            </div>
            <CommonTable 
                data={SkippPollsDatas.slice(0, 3)}  
                columns={ExpireColumns} 
            />
             <div>
              <div className='button-container'>
              <Link to="/skippedpolls">
                  <StyledButton
                    className={'button-styles'}
                    title={'View More'}
                    textTransform={'none'}
                    fontSize={12}
                    letterspacing={2}
                    textcolor={'white'}
                    fontWeight={'bold'}
                  />
                </Link>
          </div>
        </div>
        </div>
   </div>
</ExpireTableStyles>
    </div>
    </div>
    </Container>
 </>
  )
}
