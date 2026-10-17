import axios from "axios";
import { data } from "react-router-dom";

const API = "http://localhost:6969/api/posts";

export const getPosts = ()=>axios.get(API);

export const getPost=(id)=>axios.get(`${API}/${id}`);

export const createPost = (data)=>axios.post(API,data);

export const deletePost = (id)=>axios.delete(`${API}/${id}`);

export const updatePost = (id, data) => axios.put(`${API}/${id}`, data);