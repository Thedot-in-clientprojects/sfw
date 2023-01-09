import React, { useState } from 'react';
import AdminLayout from '../../components/admin/index';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Projects from '../../components/admin/projects';
import Blogs from '../../components/admin/blogs';
import Enqueries from '../../components/admin/enqueries';


function Admin() {


    const [value, setvalue] = useState('');
    const handleChange = (event, newValue) => {
        setvalue(newValue);
      };


      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    

    return(
      <div>
      <AdminLayout>
                <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Projects" />
          <Tab label="Blogs" />
          <Tab label="Enqueries" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Projects/>
      </TabPanel>
   
      <TabPanel value={value} index={1}>
        <Blogs/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Enqueries/>
      </TabPanel>
      </Box>
      </AdminLayout>
      </div>
    )
}

export default Admin;
