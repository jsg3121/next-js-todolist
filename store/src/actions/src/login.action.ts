import { createAsyncThunk } from '@reduxjs/toolkit';

type LoginFormType = {
  email: string;
  name: string;
  password: string;
};

export const login = createAsyncThunk<any, LoginFormType>(
  '@@USER/LOGIN',
  async (data) => {
    return;
  }
);
