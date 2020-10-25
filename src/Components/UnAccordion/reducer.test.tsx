import {reducer, StateType} from "./reducer";

test('Collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
   const newState =  reducer(state, {type: 'TOGGLE-COLLAPSED'})

    //expect
    expect(newState.collapsed).toBe(true)

})

test('Collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState =  reducer(state, {type: 'TOGGLE-COLLAPSED'})

    //expect
    expect(newState.collapsed).toBe(false)

})

test('Collapsed should be fake', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action


    //expect
    expect(() => reducer(state, {type: 'FAKETYPE'})).toThrowError()

})