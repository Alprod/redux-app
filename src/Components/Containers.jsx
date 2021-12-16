import React from 'react';
import Header from "./Header";
import Formulaire from "./Forms";
import DragonList from "./DragonsComponents/DragonList";
import KnightList from "./KnightsComponents/KnightList";

const Dragons = () => {
    return (
        <div>
            <div className="row row-cols-3 gx-3 bg-light my-4 p-3">
                <div className="col">
                    <Header/>
                </div>
                <div className="col">
                    <Formulaire />
                </div>
                <div className="col">
                    <DragonList />
                    <KnightList />
                </div>

            </div>
        </div>
    )
}

export default Dragons;