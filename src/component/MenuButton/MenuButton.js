import './MenuButton.css';
import hoverButton from '../../assets/hover-button.png';

function MenuButton() {

     return (
        <div className='movie-tile_hover-button'>
            <img src={hoverButton} alt='Hover Button' />
            <div className="movie-tile_menu-content">
                <a href="#" className='movie-tile_menu-link'>Edit</a>
                <a href="#" className='movie-tile_menu-link'>Delete</a>
            </div>
        </div>
     );
}

export default MenuButton;