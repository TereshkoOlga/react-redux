import React from 'react';
import CarsList from '../containers/car-list'
//создание компонента

function WebPage() {
    return (
        <div>
            <h1>Cars</h1>
            <CarsList/>
            <h3>details:</h3>
        </div>
    )
}
export default WebPage;