import React from 'react';
import CopyBtn from '../../shared/buttons/CopyBtn';
import CopyBtnTwo from '../../shared/buttons/CopyBtnTwo';

const Palettes = () => {

    return (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3'>
            <div className="col">
                <div className="card shadow-sm">
                <div className="color-display">
                    Display current hovered box color 
                </div>
                    {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                    <div className="card-body row g-2 row-cols-md-2 p-1">
                        <div className="col color-box">
                            <div className="color-place">
                                <CopyBtn />
                                <CopyBtnTwo />
                            </div>
                        </div>
                        <div className="col color-box">
                            <div className="color-place">
                                <CopyBtn />
                                <CopyBtnTwo />
                            </div>
                        </div>
                        <div className="col color-box">
                            <div className="color-place">
                                <CopyBtn />
                                <CopyBtnTwo />
                            </div>
                        </div>
                        <div className="col color-box">
                            <div className="color-place">
                                <CopyBtn />
                                <CopyBtnTwo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Palettes;