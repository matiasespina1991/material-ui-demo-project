import { AppBar } from "@mui/material"
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const pages = [
    'About Us', 
    'Shop', 
    'Contact Us'
];

export default function Header() {

    return (
        <>
            <div>
                <AppBar>
                    <Container>
                        <Toolbar>

                            <div className="header--logo-container">
                                <div className="header--logo"></div>
                            </div>

                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ color: 'white' }}
                                >
                                    {page}
                                </Button>
                            ))}

                        </Toolbar>
                    </Container>
                </AppBar>
            </div>

            <style jsx>{`
                .header--logo {
                    width: 3rem;
                    height: 3rem;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-image: url(/images/logo_white_placeholder.png);
                }
                .header--menu-item {
                    border-radius: 4px;
                }
            `}</style>
            
        </>
    )
}
