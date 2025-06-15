import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./MenuPanel.css";
import { menuItems } from "../../assets/mockData/mockData";

const MenuPanel = () => {
  const [open, setOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleToggle = () => {
    if (!open) {
      setOpen(true);
      setTimeout(() => {
        setShowOptions(true);
      }, 500);
    } else {
      setShowOptions(false);
      setTimeout(() => {
        setOpen(false);
      }, 500);
    }
  };

  return (
    <div
      className={`menu-container ${open ? "open" : "closed"} menuPannelRoot`}
    >
      <List component="nav">
        <ListItemButton
          onClick={handleToggle}
          className="menu-toggle headerMenu"
        >
          <div className="menu-toggle-content">
            <ListItemText primary="Menu" />
            <div className="menu-toggle-actions">
              <span className="vertical-divider" />
              {open ? (
                <CloseOutlinedIcon fontSize="large" />
              ) : (
                <AddOutlinedIcon fontSize="large" />
              )}
            </div>
          </div>
        </ListItemButton>

        <Collapse in={showOptions} timeout={500} unmountOnExit>
          <List component="div" disablePadding>
            {menuItems.map((item, index) => (
              <ListItemButton key={index} className="nested-item">
                <ListItemIcon>
                  <img
                    src={item.icon}
                    alt={item.label}
                    style={{ width: 28, height: 28 }}
                  />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <ListItemButton onClick={() => {}} className="lastBtn">
          <ListItemText primary="Declare Now" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default MenuPanel;
