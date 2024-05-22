import React from 'react';
import SidebarNav from '../sidebar-nav/SidebarNav';
import Palettes from './Palettes';

const ColorsShelf = () => {

    return (
        <div className="row g-3">
            <div className="col-md-4">
                <SidebarNav />
            </div>
            <div className="col-md-8">
                <Palettes />
            </div>
            
        </div>
    )
};

export default ColorsShelf;