import {v4 as uuidv4} from 'uuid';

export const initState={
    tasklist: [
        {
            id:uuidv4(),
            task:'task1',
            date:'17/04/2022',
            status:'completed',
        },
        {
            id:uuidv4(),
            task:'task2',
            date:'18/04/2022',
            status:'in_progess',
        },
        {
            id:uuidv4(),
            task:'task3',
            date:'18/04/2022',
            status:'not_start',
        },
    ]
}

function reducer(state,action){
    switch (action.type){

    }
}

export default reducer;