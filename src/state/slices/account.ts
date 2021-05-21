import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../services/network'
import { ApiResponse, AppDispatch, RootState } from '../../types'

interface AccountState {
  data: {
    user: {}
    token: null
  }
}

const initialState: AccountState = {
  data: {
    user: {},
    token: null,
  },
}

interface LoginResponse extends ApiResponse {
  data: {
    user: {}
    token: null
  }
}

interface LoginRequestPayload {
  id: string
  first_name: string
  last_name: string
  email: string
}

export const loginRequest = createAsyncThunk<
  LoginResponse,
  LoginRequestPayload,
  {
    dispatch: AppDispatch
    state: RootState
  }
>('account/login', async (payload, thunkAPI) => {
  try {
    const response = await User.login(payload)
    const { jwtToken } = response.data.data
    sessionStorage.setItem('jwtToken', jwtToken)
    return response.data as LoginResponse
  } catch (err) {
    if (!err.response) throw err
    return thunkAPI.rejectWithValue(err.response.data)
  }
})

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    logout: (state, { payload }: PayloadAction) => {
      state.data = initialState.data
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.data = action.payload.data
    })
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.data = initialState.data
    })
  },
})

export const { logout } = accountSlice.actions

export default accountSlice.reducer
