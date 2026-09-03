export type AppState = {
  userName: string
  isLoading: boolean
}

export const initialState: AppState = {
  userName: 'Guest',
  isLoading: false,
}

export function createStore() {
  let state = { ...initialState }

  return {
    getState() {
      return state
    },
    setState(nextState: Partial<AppState>) {
      state = { ...state, ...nextState }
    },
  }
}
