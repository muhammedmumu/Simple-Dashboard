import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

const TopAppBar = ({ onMenuClick }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: 'background.paper',
                boxShadow: 1
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onMenuClick}
                    edge="start"
                    sx={{ color: 'text.primary' }}
                >
                    <MenuIcon />
                </IconButton>

                <Avatar
                    sx={{
                        bgcolor: 'primary.main',
                        width: 40,
                        height: 40
                    }}
                >
                    U
                </Avatar>
            </Toolbar>
        </AppBar>
    );
};

export default TopAppBar;