import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Profile } from '@/types/types';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

interface ProfileState {
  data: Profile | null;
  status: Status;
  error: string | null;
}

const initialState: ProfileState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchProfile = createAsyncThunk<Profile>(
  'profile/fetchProfile',
  async () => {
    const res = await fetch('/api/profile');
    if (!res.ok) throw new Error(`Profile fetch failed: ${res.status}`);
    const json = await res.json();
    return json.profile as Profile;
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<Profile | null>) {
      state.data = action.payload;
      state.status = action.payload ? 'succeeded' : 'idle';
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfile.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export const { setProfile } = profileSlice.actions;

// selectors
export const selectProfile = (s: { profile: ProfileState }) => s.profile.data;
export const selectProfileStatus = (s: { profile: ProfileState }) => s.profile.status;
export const selectProfileError = (s: { profile: ProfileState }) => s.profile.error;

export default profileSlice.reducer;
