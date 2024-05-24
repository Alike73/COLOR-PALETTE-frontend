import React, { useState } from 'react';
import ColorPaletteCardFooter from '../color-palette-card-footer/ColorPaletteCardFooter';
import PaletteCardDisplay from './PaletteCardDisplay';
import PaletteCardBody from './PaletteCardBody';

const PaletteCard = ({ updatingInInput, deleteProject, title, color_1, color_2, color_3, color_4 }) => {

    const [hoveredColor, setHoveredColor] = useState('');

    const handleMouseEnter = (color) => {
        setHoveredColor(color);
    };

    const handleMouseLeave = () => {
        setHoveredColor('');
    };

    return (
        <div className="col">
            <div className="card">
                <PaletteCardDisplay 
                    title = { title }  
                    hoveredColor = { hoveredColor } 
                />
                <PaletteCardBody
                    title = { title } 
                    color_1 = { color_1 } 
                    color_2 = { color_2 } 
                    color_3 = { color_3 } 
                    color_4 = { color_4 }
                    onHover = { handleMouseEnter }
                    onLeave = { handleMouseLeave } 
                />
                
                <ColorPaletteCardFooter 
                    updatingInInput = { updatingInInput } 
                    deleteProject = { deleteProject } 
                />
            </div>
            <hr className='divider' />
        </div>
    )
};

export default PaletteCard;