import React from 'react';
import { Box, Typography, colors } from '@mui/material';
import { styled } from '@mui/system';
import { dispatchThemeEvent } from '../../../utils/themeEvent';

const ColorSelectionContainer = styled(Box)({
  '& .MuiTypography-root': {
    fontSize: '13px !important',
    fontFamily: 'Lato !important',
    fontWeight: 600,
    letterSpacing: '.6px',
    borderBottom: '1px solid #f1f1f1',
    paddingBottom: '7px',
    marginBottom: '13px',
    color:"#212529"
  },
});

const ColorLabel = styled('label')<{ bgColor: string }>(({ bgColor }) => ({
  display: 'inline-block',
  width: '30px',
  height: '30px',
  cursor: 'pointer',
  transition: 'all .1s ease',
  borderRadius: '.25rem',
  marginRight: '.3125rem',
  marginBottom: '.1875rem',
  backgroundColor: bgColor,
}));

const ColorSelection: React.FC = () => {
  const themes = [
    { colorName: "default-theme", backgroundColor: "rgb(37, 36, 54)" },
    { colorName: "pink-theme", backgroundColor: "rgb(219, 64, 149)" },
    { colorName: "blue-theme", backgroundColor: "rgb(0, 136, 204)" },
    { colorName: "green-theme", backgroundColor: "rgb(94, 171, 43)" },
    { colorName: "peach-theme", backgroundColor: "rgb(233, 80, 74)" },
    { colorName: "dark-red-theme", backgroundColor: "rgb(128, 0, 0)" },
    { colorName: "brown-theme", backgroundColor: "rgb(128, 128, 0)" },
    { colorName: "dark-blue-theme", backgroundColor: "rgb(0, 0, 128)" },
    { colorName: "purple-theme", backgroundColor: "rgb(128, 0, 128)" },
  ]

  const handleColorChange = (colorName:string)=>{
    localStorage.setItem("app-theme", colorName);
    dispatchThemeEvent(colorName);
  }
  return (
    <ColorSelectionContainer>
      <Typography variant="h6" gutterBottom>
        Theme color
      </Typography>
      <Box>
      {themes.map((color, index) => (
        <ColorLabel onClick={()=>handleColorChange(color?.colorName)} key={index} bgColor={color?.backgroundColor} htmlFor={`primary_color_${index}`} />
      ))}
      </Box>
      
    </ColorSelectionContainer>
  );
};

export default ColorSelection;
