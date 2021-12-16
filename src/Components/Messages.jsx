import Alert from "react-bootstrap/Alert";
import {Fragment} from "react";

const Messages = ({message, verifAdd}) => {

    return (
        <Fragment>
        {message !== ''  &&
            <Alert variant={!verifAdd ? 'danger' : 'success'}>
                {message}
            </Alert>
        }
        </Fragment>
    )
}
export default Messages;