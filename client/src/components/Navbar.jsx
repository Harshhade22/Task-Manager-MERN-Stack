import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TaskList from "./TaskList";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = ["Task List", "Create Task", "Dashboard"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const isAuthenticated = true;

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleCloseNavMenu = (e) => setAnchorElNav(null);

  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
  const handleCloseUserMenu = (e) => setAnchorElUser(null);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AssignmentIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-item"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Task Manager
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {isAuthenticated ? (
                  <>
                    <MenuItem
                      component={Link}
                      to="/"
                      onClick={handleCloseNavMenu}
                    >
                      Dashboard
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/task-list"
                      onClick={handleCloseNavMenu}
                    >
                      Task List
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/create-task"
                      onClick={handleCloseNavMenu}
                    >
                      Create Task
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem
                      component={Link}
                      to="/login"
                      onClick={handleCloseNavMenu}
                    >
                      Login
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/register"
                      onClick={handleCloseNavMenu}
                    >
                      Register
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Task Manager
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {isAuthenticated && (
                <>
                  <MenuItem
                    component={Link}
                    to="/"
                    onClick={handleCloseNavMenu}
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/task-list"
                    onClick={handleCloseNavMenu}
                  >
                    Task List
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/create-task"
                    onClick={handleCloseNavMenu}
                  >
                    Create Task
                  </MenuItem>
                </>
              )}
            </Box>

            {isAuthenticated ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Account settings">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar>H</Avatar>
                  </IconButton>
                </Tooltip>

                <Menu
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      
    </>
  );
}

export default Navbar;
