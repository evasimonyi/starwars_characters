import { Box, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { grey } from '@mui/material/colors';

const Header = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: grey[900] }}>
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
