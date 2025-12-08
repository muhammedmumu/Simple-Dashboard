import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Sidebar from '../Components/Drawer/SideBar';
import Lists from '../Components/ListItem/List';
import Display from '../Components/DisplayProduct/Display';
import AddProduct from '../Components/AddProduct/AddProduct';
import Edit from '../Components/Edite/Edit';
import TopAppBar from '../Components/AppBar/AppBar';
import { DataContext } from '../Context/DataContaxt';

const DashboardLayout = () => {
    const { selectedProduct } = useContext(DataContext);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

    const handleMenuClick = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: 'background.default',
            }}
        >
            {/* App Bar */}
            <TopAppBar onMenuClick={handleMenuClick} />

            {/* Sidebar */}
            {isMobile ? (
                <Drawer
                    anchor="left"
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: 280,
                            boxSizing: 'border-box',
                        },
                    }}
                >
                    <Sidebar />
                </Drawer>
            ) : (
                sidebarOpen && <Sidebar />
            )}

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: { xs: 2, sm: 3 },
                    mt: 8,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    gap: { xs: 2, sm: 3 },
                    overflow: 'auto',
                }}>

                {/* Left Section */}
                <Box sx={{ flex: { xs: '1', lg: '1 40%' }, minWidth: 0 }}>
                    <Lists />
                </Box>

                {/* Middle Section */}
                <Box sx={{ flex: { xs: '1', lg: '1 30%' }, minWidth: 0 }}>
                    <Display />
                </Box>

                {/* Right Section */}
                <Box sx={{ flex: { xs: '1', lg: '1 30%' }, minWidth: 0 }}>
                    {selectedProduct ? <Edit /> : <AddProduct />}
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardLayout;