import './MenuButton.css';
import hoverButton from '../../assets/hover-button.png';
import { editButton, deleteButton } from '../../constants';

function MenuButton() {

     return (
        <div className='movie-tile_hover-button'>
            <img src={hoverButton} alt='Hover Button' />
            <div className="movie-tile_menu-content">
                <a href="#" className='movie-tile_menu-link'>{editButton}</a>
                <a href="#" className='movie-tile_menu-link'>{deleteButton}</a>
            </div>
        </div>
     );
}

export default MenuButton;