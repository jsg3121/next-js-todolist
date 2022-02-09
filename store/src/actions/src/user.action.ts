import { createAction } from '@reduxjs/toolkit';

export const user = createAction<string, '@@/USER'>('@@/USER');
