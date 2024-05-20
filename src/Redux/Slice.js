const apiStatus = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: "ERROR",
};

const initialState = {
  data: {},
  status: apiStatus.IDLE,
};

export const Slice = createSlice({
  name: "Slice",
  initialState,
  reducers: {
    setProducts: (state, payload) => {
      state.data = payload;
    },
    setStatus: (state, payload) => {
      state.status = payload;
    },
  },
});

// thunk function

export const fetcherData = (api) => {
  return async function getData(dispath, getState) {
    try {
      dispath(setStatus(apiStatus.LOADING));
      const response = await fetch(api);
      const data = await response.json();
      dispath(setProducts(data));
      dispath(setStatus(apiStatus.IDLE));
    } catch (error) {
      console.log(error);
      dispath(setStatus(apiStatus.ERROR));
    }
  };
};

// Action creators are generated for each case reducer function
export const { setProducts, setStatus } = Slice.actions;
export default Slice.reducer;
