



import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, FETCH_STUDENT } from "../type/Type";

let initialState = {
    error: '',
    students: []
}


function StudentReducer(state = initialState, action) {

    switch (action.type) {

        case FETCH_STUDENT:
            console.log("Data in Reducer from Fetch Action: ", action.payload);
            return {
                ...state,
                students: action.payload
            }
        case ADD_STUDENT:
            console.log("Data in Reducer ADD_STUDENT: ", action.payload);
            let newstudents = state.students;
            newstudents.push(action.payload)

            return {
                ...state,
                students: newstudents,
            }

        case UPDATE_STUDENT:
            console.log("Data in Reducer Update: ", action.payload);
            let updatedStudent = state.students.map((item) => {
                if (action.payload._id === item._id) {
                    return { ...action.payload.data, ...action.payload._id }
                }
                else {
                    return item
                }

            })
            return {
                ...state,
                students: updatedStudent,
            }

        case DELETE_STUDENT:
            console.log("Data in Reducer DELETE_STUDENT: ", action.payload);

            let filterStudents = state.students.filter((item) => item._id !== action.payload)
            return {
                ...state,
                students: filterStudents
            }


        default:
            return state;
    }
}

export default StudentReducer;