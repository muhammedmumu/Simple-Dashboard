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

const sidebarWidth = 264;

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
                background: (theme) =>
                    theme.palette.mode === 'dark'
                        ? 'linear-gradient(180deg, #0b1020 0%, #111936 100%)'
                        : 'linear-gradient(180deg, #eef2ff 0%, #f8fafc 100%)',
            }}
        >
            <TopAppBar onMenuClick={handleMenuClick} />

            {isMobile ? (
                <Drawer
                    anchor="left"
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: sidebarWidth,
                            boxSizing: 'border-box',
                            background: 'transparent',
                        },
                    }}
                >
                    <Sidebar />
                </Drawer>
            ) : (
                sidebarOpen && <Sidebar />
            )}

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    minWidth: 0,
                    pt: { xs: 9, md: 10 },
                    pb: { xs: 2, md: 3 },
                    px: { xs: 1.5, sm: 2.5, md: 3 },
                    overflow: 'auto',
                }}>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: 1580,
                        mx: 'auto',
                    }}
                >
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                xl: 'minmax(0, 1.5fr) minmax(320px, 0.9fr) minmax(340px, 1fr)',
                            },
                            gap: { xs: 2, md: 2.5 },
                            alignItems: 'start',
                        }}
                    >
                        <Box sx={{ minWidth: 0 }}>
                            <Lists />
                        </Box>

                        <Box sx={{ minWidth: 0 }}>
                            <Display />
                        </Box>

                        <Box sx={{ minWidth: 0 }}>
                            {selectedProduct ? <Edit /> : <AddProduct />}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardLayout;
