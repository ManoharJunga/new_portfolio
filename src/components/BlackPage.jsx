import React from 'react'
import './BlackPage.css'
function BlackPage() {
    return (
        <div className="black_section">
            <div className="home_hero">
            <button className="button_black">
                <span className="span-mother">
                    <span>A</span>
                    <span>B</span>
                    <span>O</span>
                    <span>U</span>
                    <span>T</span>
                </span>
                <span className="span-mother2">
                    <span>A</span>
                    <span>B</span>
                    <span>O</span>
                    <span>U</span>
                    <span>T</span>
                </span>
            </button>
                <div className="home_hero_text left" data-mobile="">
                    <p className="ol">Having collaborated with various startup companies,</p>
                </div>
                <div className="home_hero_text left" data-mobile="">
                    <p className="ol"> I've acquired a wealth of skills and knowledge, honing my expertise through diverse experiences along the way.</p>
                </div>
                <div className="home_hero_text right" data-mobile="">
                    <p className="ol">honing my expertise through diverse experiences along the way.</p>
                </div>
            </div>
            
        </div>
    );
}

export default BlackPage