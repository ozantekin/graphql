import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  loading: false,
  error: '',
}

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {}
)

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload.data
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload.error
    })
  },
})

export default contentSlice.reducer
