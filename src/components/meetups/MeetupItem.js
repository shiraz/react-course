import { useContext } from 'react';

import Card from '../ui/Card/Card';

import FavoritesContext from '../../store/favorites-context';

import classes from './MeetupItem.module.css';

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  const buttonText = itemIsFavorite ? 'Remove from Favorites' : 'To Favorites';

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{buttonText}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
