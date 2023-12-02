import React, { FC, ReactNode } from 'react';
//import { SxProps, Theme } from '@mui/material/styles';

//import mergeSx from 'merge-sx';
import { Box } from '@mui/material';
import * as styles from './Navbar.styles'
import { Outlet } from "react-router-dom";

interface NavbarProps  {
    children?: ReactNode;
}

const NavBar: FC<NavbarProps> =({ children = <></> }) => {

    return (
    <Box sx={styles.navbartcontainer()}>
        <Box sx={styles.navbar()}></Box>
        <Box sx={styles.children()}>
        {children}
        <Outlet />
        </Box>
    </Box>
);
};

export default NavBar;