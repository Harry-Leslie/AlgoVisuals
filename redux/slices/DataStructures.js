import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    DS: {arrays: {}, S_ll: {}, D_ll: {}, BT:{}, BST: {}, maxheaps: {}, minheaps: {}, queue: {}, stack:{}}
}

export const DataStructures = createSlice({
    name: "Data Structures",
    initialState,
    reducers: {
        pass: (state) => {
            
        }
    }
})

// export const {} = Array.actions;
// export default Array.reducer

