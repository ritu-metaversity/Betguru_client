import React from 'react';
import { Box, Typography, colors } from '@mui/material';
import { styled } from '@mui/system';

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
  const colors = [
    'rgb(37, 36, 54)',
    'rgb(219, 64, 149)',
    'rgb(0, 136, 204)',
    'rgb(94, 171, 43)',
    'rgb(233, 80, 74)',
    'rgb(128, 0, 0)',
    'rgb(128, 128, 0)',
    'rgb(0, 0, 128)',
    'rgb(128, 0, 128)',
  ];

  return (
    <ColorSelectionContainer>
      <Typography variant="h6" gutterBottom>
        Theme color
      </Typography>
      <Box>
      {colors.map((color, index) => (
        <ColorLabel key={index} bgColor={color} htmlFor={`primary_color_${index}`} />
      ))}
      </Box>
      
    </ColorSelectionContainer>
  );
};

export default ColorSelection;
