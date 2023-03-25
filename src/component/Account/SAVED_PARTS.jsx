import React, {Component} from 'react';
import Saved from "../IMG/Saved.png";

class SavedParts extends Component {
    render() {
        return (
            <>
                <div className={'w-100 m-auto mt-5  align-items-center justify-content-center d-flex'}>
                    <img width={'20%'} src={Saved}/>
                </div>
                <div className={"w-100 text-center align-items-center justify-content-center d-flex"}>
                    <p className={'p-3 fs-5 fst-italic opacity-75 w-100'}> All Your Saved Parts Cars will appear hear </p>
                </div>
            </>
        );
    }
}

export default SavedParts;