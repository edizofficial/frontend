export const reduxAction = (type, data) => {
  return {
    type,
    payload: data
  };
};

export const errorPayload = (type, error) => {
  return {
    type,
    error
  };
};

export const baseDispatchAction = (state, data) => {
  return (dispatch) => {
    dispatch(reduxAction(state, data));
  };
};
export const removeDataAction = (state) => {
  return (dispatch) => {
    dispatch(reduxAction(state, []));
  };
};
