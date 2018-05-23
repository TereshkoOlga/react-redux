import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//Контейнеры - берут данные из хранилища и помещают в компонент

class ClassList extends Component {

    render() {
        return (
            <ol>
                {this.showList()}
            </ol>
        )
    }

    showList() {
        return this.props.cars.map((car) => {
            return (
                <li key={car.id}>{car.name}</li>
            )
        })
    }
}

// эта функция берет значения из массива cars и вставляет их в качестве свойст, в качестве пропс
function mapStateToProps(state) {

    return {
        cars: state.cars
    //    таким образом мы получаем весь массив о карс и мы можем его использовать
    }
    
}

export default connect (mapStateToProps)(ClassList)
//таким образом мы не просто отрисовывем элемементы из car-list мы выводим его с применением данных из хранилища