import { createAction } from '@reduxjs/toolkit';

export const sample = createAction<string, '@@/SAMPLE'>('@@/SAMPLE');
