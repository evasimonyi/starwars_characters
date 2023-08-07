import { Box, Toolbar, IconButton, Typography, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Star Wars Character Search
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
