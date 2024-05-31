import api from "../components/api";

const baseURL = "/note";

export const createNote = (text) => {
  console.log(text, "jackj");
  return api.post(`${baseURL}/notes`, { text });
};

export const editNote = (id, text) => {
  console.log(text, "jh");
  return api.put(`${baseURL}/update/${id}`, { text });
};
//delete forever
export const deleteNoteForever = (id) => {
  return api.delete(`${baseURL}/delete/${id}`);
};

export const getNote = (id) => {
  return api.get(`${baseURL}/${id}`);
};

export const getNotes = () => {
  return api.get(`${baseURL}`);
};

export const restore = (id) => {
  return api.put(`${baseURL}/restore/${id}`);
};

export const moveToTrash = (id) => {
  return api.put(`${baseURL}/trash/${id}`);
};
export const getTrash = () => {
  return api.get(`${baseURL}/trash`);
};
