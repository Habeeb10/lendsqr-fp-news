import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../Store';
import axios from 'axios';

// const baseUrl = 'https://newscatcher.p.rapidapi.com/v1/latest_headlines';

interface fPNews {
  newsData: [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

// Define the initial state using that type
const initialState: fPNews = {
  loading: 'idle',
  newsData: [],
};

export const FetchNews = createAsyncThunk('title', async () => {
  const options = {
    method: 'GET',
    url: 'https://newscatcher.p.rapidapi.com/v1/latest_headlines',
    params: {lang: 'en', media: 'True'},
    headers: {
      'X-RapidAPI-Key': '9d37e5b69cmsh7bb8af13d291c11p1a9659jsndc49ea92a05f',
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com',
    },
    timeout: 3000,
  };

  axios(options).then(res => {
    return res.data;
  });
});
export const fPNewsSlice = createSlice({
  name: 'fpnews',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(FetchNews.fulfilled, (state, {payload}) => {
      console.log(payload);
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const News = (state: RootState) => state.NewsSlice;

export default fPNewsSlice.reducer;
