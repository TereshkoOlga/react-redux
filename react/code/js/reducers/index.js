//тут мы подключаем все наши редюсеры, чтобы одним махом отправить их в хранилище при помощи функции combineReducers

import {combineReducers} from 'redux';
import CarReducers from './car';

const allReducers = combineReducers({
    cars: CarReducers
})
//передаем в функцию combineReducers все наши редюсеры

export default allReducers;
// экпортируем все редюсеры из этого файла