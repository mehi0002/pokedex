import './ListItem.css';

// Dispays the pokemon name, image, and caught status
function ListItem({name, image, alt}){

    /**** Build *****/
    return(
        <>
            <p>{name}</p>
            {/* <img src={poke['sprites']['other']['official-artwork']['front_default']} aria-hidden='true'/> */}
            <img src={image} alt={alt}/>
        </>
    );
}

export default ListItem;