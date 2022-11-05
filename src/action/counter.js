export const increment = (newValue) => {
    return {
        type: 'INCREMENT',
        payload: newValue
    }
}

export const decrement = (newValue) => {
    return {
        type: 'DECREMENT',
        payload: newValue
    }
}