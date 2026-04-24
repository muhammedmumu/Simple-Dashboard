import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TopAppBar = ({ onMenuClick }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                background: 'rgba(15, 23, 42, 0.72)',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.18)',
                backdropFilter: 'blur(18px)',
                borderBottom: '1px solid rgba(148, 163, 184, 0.12)',
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 72 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={onMenuClick}
                        edge="start"
                        sx={{ color: '#e2e8f0' }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box>
                        <Typography sx={{ color: '#f8fafc', fontWeight: 700, fontSize: '1rem' }}>
                            Dashboard Overview
                        </Typography>
                        <Typography sx={{ color: 'rgba(226, 232, 240, 0.72)', fontSize: '0.78rem' }}>
                            Product and inventory workspace
                        </Typography>
                    </Box>
                </Box>

                <Avatar
                    sx={{
                        bgcolor: '#6366f1',
                        width: 36,
                        height: 36,
                        fontSize: '0.95rem',
                    }}
                >
                    U
                </Avatar>
            </Toolbar>
        </AppBar>
    );
};

export default TopAppBar;
