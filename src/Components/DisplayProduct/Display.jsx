import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import { DataContext } from '../../Context/DataContaxt';
import React, { useContext } from 'react';



function DisplayProduct() {
    const { display } = useContext(DataContext);



    return (
        <Paper
            elevation={0}
            sx={{
                background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                minHeight: { xs: 320, xl: 100 },
                boxShadow: '0 18px 40px rgba(76, 81, 191, 0.28)',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    filter: 'blur(40px)',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -30,
                    left: -30,
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    filter: 'blur(40px)',
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    p: { xs: 2.25, md: 2.5 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    variant="overline"
                    sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        mb: 1,
                    }}
                >
                    Featured Product
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        color: '#fff',
                        fontWeight: 700,
                        mb: 1,
                    }}
                >
                    {display.name}
                </Typography>

                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        my: 1.5,
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '80%',
                            height: '80%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(30px)',
                        }}
                    />
                    <Box
                        component="img"
                        src={display.image}
                        alt="Gaming Headset"
                        sx={{
                            width: '100%',
                            maxWidth: 220,
                            height: 'auto',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 16px 28px rgba(0, 0, 0, 0.25))',
                            position: 'relative',
                            zIndex: 1,
                        }}
                    />
                </Box>

                <Typography
                    variant="h5"
                    sx={{
                        color: '#fff',
                        fontWeight: 800,
                        mb: 1,
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    {display.price}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        mb: 2.25,
                        lineHeight: 1.55,
                    }}
                >
                    {display.description} </Typography>

                <Box sx={{ display: 'flex', gap: 1.25, flexWrap: 'wrap' }}>
                    <Button
                        variant="contained"
                        startIcon={<InfoIcon />}
                        sx={{
                            flex: 1,
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            color: '#fff',
                            fontWeight: 600,
                            borderRadius: 2.5,
                            py: 1,
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                            '&:hover': {
                                background: 'rgba(255, 255, 255, 0.3)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        More
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        sx={{
                            flex: 1,
                            background: '#fff',
                            color: '#6366f1',
                            fontWeight: 600,
                            borderRadius: 2.5,
                            py: 1,
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                            '&:hover': {
                                background: '#f8f9fa',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                            },
                            transition: 'all 0.3s ease',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        Add Product
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default DisplayProduct;
