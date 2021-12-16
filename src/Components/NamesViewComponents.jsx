import Button from "react-bootstrap/Button";
import {Fragment} from "react";

const NamesView = ({ name,handle }) => {
    return (
        <Fragment>
            <div className="row rows-col-2">
                <div className="col p-3"> Nom : {name} </div>
                <div className="col p-3">
                    <Button size="sm" variant="outline-danger" onClick={handle}>Supprimer</Button>
                </div>
            </div>
        </Fragment>
    )
}
export default NamesView;