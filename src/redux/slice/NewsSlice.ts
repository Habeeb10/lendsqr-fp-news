import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../Store';
import axios from 'axios';

interface fPNews {
  newsData: [];
}

// Define the initial state using that type
const initialState: fPNews = {
  newsData: [],
};

export const FetchNews = createAsyncThunk('title', async () => {
  const options = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en',
    headers: {
      'X-RapidAPI-Key': '9d37e5b69cmsh7bb8af13d291c11p1a9659jsndc49ea92a05f',
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
    },
    timeout: 3000,
  };
  try {
    console.log('data');
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const NewsSlice = createSlice({
  name: 'fpnews',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(FetchNews.fulfilled, (state, {payload}) => {
      state.newsData = payload.articles;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const News = (state: RootState) => state.NewsReducer;

export default NewsSlice.reducer;
