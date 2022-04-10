import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import db from '../firebaseConfig';

const ItemListContainer = () => {

  const [items , setItems ] = useState("");
  const { idCategory } = useParams();

  useEffect (() => {
    const firestoreFetch = async () => {
      const querySnapshot = await getDocs (collection(db, "products"));
      return querySnapshot.docs.map (document => ({
        id: document.id,
        ...document.data()
      }))
    }
    firestoreFetch()
      .then(items => setItems(idCategory !== undefined ? items.filter(item => item.category === idCategory):items))
      .catch(error => console.log(error));
  },[items])

    //para actualizar el componenete
    useEffect(() => {
    },[idCategory])
  
    return (
      <>       
        <ItemList items={items}/>
      </>
    );
}

export default ItemListContainer;