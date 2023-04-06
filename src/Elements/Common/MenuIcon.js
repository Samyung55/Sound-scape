import React from "react";
import { RiMenu4Fill } from "react-icons/ri";

function MenuIcon({ uiState, setUiState }) {
    const navHandler = () => {
        setUiState({ ...uiState, aboutShown: true });
    };
    return (
        <RiMenu4Fill
          className='menu__icon'
          onClick={navHandler}
          style={{ cursor: 'pointer' }}
        />
      );
}

export default MenuIcon;
