import React, { useState } from "react";
import {
  Box,
  Container,
  // Grid,
  Paper,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [mockItems, setMockItems] = useState([
    { name: "Laptop", currentBid: "£500" },
    { name: "Dining Table", currentBid: "£150" },
    { name: "Phone case", currentBid: "£8.50" },
    { name: "Hat", currentBid: "£12.50" },
    { name: "Jacket", currentBid: "£70" },
  ]);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1, minHeight: "90vh", backgroundColor: "#f5f5f5" }}>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          {/* Back Button */}
          <IconButton
            onClick={handleLogout}
            edge="start"
            color="inherit"
            aria-label="back"
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Dashboard Title */}
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            JustBid
          </Typography>

          {/* Search Bar */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                mr: 1,
                width: { xs: "120px", sm: "200px", md: "250px" },
              }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </Box>

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            color="inherit"
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 1 }}>
        <Grid>
          <Paper elevation={3} sx={{ p: 1, paddingX: 3 }}>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6">Dashboard -Temp</Typography>
            </Box>
          </Paper>
        </Grid>
      </Container>

      <Container sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          {/* Categories Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Categories
              </Typography>
              <List>
                {["Electronics", "Furniture", "Vehicles", "Real Estate"].map(
                  (category, index) => (
                    <ListItemButton key={index}>
                      <ListItemText primary={category} />
                    </ListItemButton>
                  )
                )}
              </List>
            </Paper>
          </Grid>

          {/* Bidding Items List */}
          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Bidding Items
              </Typography>
              <List>
                {mockItems.map((item, index) => (
                  <ListItem
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                    key={index}
                    divider
                  >
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item xs={6}>
                        <ListItemText primary={item.name} />
                      </Grid>
                      <Grid sx={{ padding: "10px" }} item xs={4}>
                        <Typography variant="body2" color="textSecondary">
                          Current Bid: {item.currentBid}
                        </Typography>
                      </Grid>
                      <Grid sx={{ marginLeft: "10px" }} item xs={2}>
                        <Button variant="contained" size="small">
                          Bid Now
                        </Button>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
