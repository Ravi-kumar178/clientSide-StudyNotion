import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    course : null,
    step:1,
    editCourse: false
}

const courseSlice = createSlice({
    name:"course",
    initialState,
    reducers:{
        setCourse:(state,action)=>{
            state.course = action.payload
        },
        setStep:(state, action)=>{
            state.step = action.payload
        },
        setEditCourse:(state,action)=>{
            state.editCourse = action.payload
        },
        resetCourseState:(state)=>{
            state.step = 1;
            state.course = null;
            state.editCourse = false
        }
    }
})

export const {setCourse, setStep, setEditCourse,resetCourseState} = courseSlice.actions
export default courseSlice.reducer