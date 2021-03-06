import api from "../../api/api";

const registerUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.post("/auth/register", data, {
        withCredentials: true,
      });
      dispatch({
        type: "REGISTER_USER",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "REGISTER_USER",
        payload: error.response,
      });
    }
  };
};

export default registerUser;
