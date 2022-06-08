export const initialState = {
  page: 1,
  size: 20,
  total: 0,
  filtered: {},
  data: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'changePage':
      return { ...state, page: action.payload };
    case 'setSize':
      return { ...state, size: action.payload };
    case 'setTotal':
      return { ...state, total: action.payload };
    case 'setData':
      return { ...state, data: action.payload };
    case 'setFilterd':
      return { ...state, filtered: action.payload };
    default:
      return state;
  }
};
