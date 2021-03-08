import { ACTION_INCREMENT, ACTION_DECREMENT } from './actionTypes';

export const actionIncrement = () => {
    return {
        type: ACTION_INCREMENT,
    }
}

export const actionDecrement = () => {
    return {
        type: ACTION_DECREMENT,
    }
}