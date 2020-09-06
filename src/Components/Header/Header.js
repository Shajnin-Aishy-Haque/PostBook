import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '../Home/Home';
import LogIn from '../LogIn/LogIn';
import LogOut from '../LogOut/LogOut';

import { useHistory } from 'react-router-dom';

const Header = () => {
    const useStyles = makeStyles({
        root: {
          flexGrow: 1,
        },
      });
      const classes = useStyles();
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      
      let history = useHistory();

      function handleClick(path) {
        //console.log(path)
      history.push(path);
        
      }
      console.log(history)
    return (
        <div className="header">
          <div className="header-name"><h1>PostBook</h1></div>  

          <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
         
         <Tab onClick={()=>handleClick('/Home')} label="Home" />
        <Tab onClick={()=>handleClick('/login')} label="Log In" />
        <Tab onClick={()=>handleClick('/logout')} label="Log Out" />
      </Tabs>
  
 </Paper>

 
        </div>
    );
};

export default Header;