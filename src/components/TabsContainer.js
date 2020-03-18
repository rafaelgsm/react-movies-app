import React from "react";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabPanel from "../layout/TabPanel";
import MoviesTabContainer from "./MoviesTabContainer";
import SearchTabContainer from "./SearchTabContainer";
import TvTabContainer from "./TvTabContainer";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    border: "1px solid #000"
  }
}));

const TabsContainer = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          textColor="primary"
          variant="fullWidth"
          style={{ background: "#f2f2f2" }}
          value={props.value}
          onChange={props.handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Movies" {...a11yProps(0)} />
          <Tab label="Search Results" {...a11yProps(1)} />
          <Tab label="TV Shows" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={props.value} index={0}>
        <MoviesTabContainer />
      </TabPanel>
      <TabPanel value={props.value} index={1}>
        <SearchTabContainer searchList={props.searchList} />
      </TabPanel>
      <TabPanel value={props.value} index={2}>
        <TvTabContainer />
      </TabPanel>
    </div>
  );
};
export default TabsContainer;
