import '../../componentsCSS/Body/ItemList.css';
import Item from '../Body/Item';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const ItemList = (props) =>{    
  
    return(
        <div className='center'>
            {
                props.items.length > 0 ? (
                    props.items.map((item) => (
                    <Item 
                        key={item.id} 
                        title={item.name}
                        img={item.img} 
                        price={item.price}
                        id={item.id} 
                    />
                ))
            ):(
                <div className='center'>
                <Box sx={{ width: '100%'}} id="box">
                    <LinearProgress />
                </Box>
            </div>  
            )}
        </div>
    )
}

export default ItemList;