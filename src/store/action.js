import * as types from "./action.types.js";
import axios from "axios";
// ##########################################
const getMusicDetailsLoading = (payload) => {
  return {
    type: types.GET_MUSIC_DETAILS_LOADING,
    payload,
  };
};


const getMusicDetailsSuccess = (payload) => {
  return {
    type: types.GET_MUSIC_DETAILS_SUCCESS,
    payload,
  };
};


const getMusicDetailsError = (payload) => {
  return {
    type: types.GET_MUSIC_DETAILS_ERROR,
    payload,
  };
};





const getMusicDetailsAPI = (payload) => (dispatch) => {
    dispatch(getMusicDetailsLoading(payload));
    axios
      .get(`https://mock-server-eight-app-data.onrender.com/Musics`)
      .then((r) => dispatch(getMusicDetailsSuccess(r.data)))
      .catch((e) => dispatch(getMusicDetailsError(e.data)));
  };



  const addMusicDetailsLoading = (payload) => {
    return {
      type: types.DELETE_MUSIC_DETAILS_LOADING,
      payload,
    };
  };
  const addMusicDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_MUSIC_DETAILS_SUCCESS,
      payload,
    };
  };
  const addMusicDetailsError = (payload) => {
    return {
      type: types.DELETE_MUSIC_DETAILS_ERROR,
      payload,
    };
  };
  
  const addMusicDetailsAPI = (payload) => (dispatch) => {
    dispatch(addMusicDetailsLoading(payload));
    axios
      .post(`https://mock-server-eight-app-data.onrender.com/Musics`, payload)
      .then((r) => {
        dispatch(addMusicDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getMusicDetailsAPI());
      })
      .catch((e) => dispatch(addMusicDetailsError(e.data)));
  };
  // ##########################################
  const updateMusicDetailsLoading = (payload) => {
    return {
      type: types.DELETE_MUSIC_DETAILS_LOADING,
      payload,
    };
  };
  const updateMusicDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_MUSIC_DETAILS_SUCCESS,
      payload,
    };
  };
  const updateMusicDetailsError = (payload) => {
    return {
      type: types.DELETE_MUSIC_DETAILS_ERROR,
      payload,
    };
  };
  
  const updateMusicDetailsAPI = (payload) => (dispatch) => {
    dispatch(updateMusicDetailsLoading(payload));
    axios
      .patch(
        `https://mock-server-eight-app-data.onrender.com/Musics/${payload.id}`,
        payload
      )
      .then((r) => {
        dispatch(updateMusicDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getMusicDetailsAPI());
      })
      .catch((e) => dispatch(updateMusicDetailsError(e.data)));
  };
  
  // ##########################################
  const deleteMusicDetailsLoading = (payload) => {
    return {
      type: types.DELETE_MUSIC_DETAILS_LOADING,
      payload,
    };
  };
  const deleteMusicDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_MUSIC_DETAILS_SUCCESS,
      payload,
    }
 }  
  const deleteMusicDetailsError = (payload) => {
    return {
      type: types.DELETE_MUSIC_DETAILS_ERROR,
      payload,
    };
  };
  
  const deleteMusicDetailsAPI = (payload) => (dispatch) => {
    dispatch(deleteMusicDetailsLoading(payload));
    axios
      .delete(`https://mock-server-eight-app-data.onrender.com/Musics/${payload}`)
      .then((r) => {
        dispatch(deleteMusicDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getMusicDetailsAPI());
      })
      .catch((e) => dispatch(deleteMusicDetailsError(e.data)));
  };


  export{getMusicDetailsAPI,addMusicDetailsAPI,updateMusicDetailsAPI,deleteMusicDetailsAPI}