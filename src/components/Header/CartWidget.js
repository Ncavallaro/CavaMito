import '../../componentsCSS/Header/CartWidget.css';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from "../Body/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges() {

  const context = useContext(CartContext)

  return (
    <IconButton aria-label="cart" id='cartWidget'>
      <StyledBadge badgeContent={context.calculateCant()} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}