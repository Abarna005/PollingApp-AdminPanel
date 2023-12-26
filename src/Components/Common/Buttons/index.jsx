import React from "react";
import { StyledButtonWrapper } from "./style";
import { Typography } from "@mui/material";

export default function StyledButton({
  children,
  variant,
  fullWidth,
  type,
  onClick,
  disabled,
  className,
  color,
  sx,
  startIcon,
  endIcon,
  size,
  title,
  textcolor,
  height,
  fontSize,
  iconsize,
  iconcolor,
  bordercolor,
  backgroundcolor,
  handleclick,
  fontWeight,
  textTransform,
  letterspacing,
  isActive,
  disableTouchRipple,
}) {
  return (
    <StyledButtonWrapper
      variant={variant}
      fullWidth={fullWidth}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      color={color}
      sx={sx}
      fontSize={fontSize}
      height={height}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      iconcolor={iconcolor}
      handleclick={handleclick}
      iconsize={iconsize}
      bordercolor={bordercolor}
      backgroundcolor={backgroundcolor}
      fontWeight={fontWeight}
      textTransform={textTransform}
      letterspacing={letterspacing}
      isActive={isActive }
      disableTouchRipple={disableTouchRipple}
    >
      {children}
      <Typography
        sx={{ color: textcolor, fontSize: fontSize, fontWeight: fontWeight,textTransform:textTransform ,letterSpacing:letterspacing}}
      >
        {title}
      </Typography>
    </StyledButtonWrapper>
  );
}
