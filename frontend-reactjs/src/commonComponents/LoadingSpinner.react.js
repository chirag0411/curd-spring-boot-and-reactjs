import React from 'react';
import { CombSpinner } from "react-spinners-kit";

const styleSuspenseDiv = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
};

export default class LoadingSpinner extends React.Component {
    render() {
        return (
            <div style={styleSuspenseDiv}>
                <CombSpinner size={180} color="#8c2323"></CombSpinner>
            </div>
        );
    }
}
