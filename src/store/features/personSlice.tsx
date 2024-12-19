import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Person {
  id: number;
  name: string;
}

interface PersonState {
  persons: Person[];
}

const initialState: PersonState = {
  persons: [],
};

export const fetchPerson = createAsyncThunk(
  "person/fetch",
  async (thunkAPI) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
);

export const createPerson = createAsyncThunk(
  "person/save",
  async (name: string, thunkAPI) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      }
    );

    const data = await response.json();
    return data;
  }
);

export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      console.log(action.payload);
      state.persons.push({
        id: state.persons.length,
        name: action.payload.name,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPerson.fulfilled, (state, action) => {
      state.persons = action.payload;
    });
    builder.addCase(createPerson.fulfilled, (state, action) => {
      state.persons.push(action.payload);
    });
  },
});

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;
