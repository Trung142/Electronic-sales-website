import axios from "./createAxios";
 //user
const read_user = (page) => {
   return axios.get(`/read?page=${page}&limit=6`)
}
const create_user = (value) => {
   return axios.post(`/create`, value);
}
const loginUser = (valua) => {
   return axios.post(`/loginUser`,valua);
}
const image_avata = (id) => {
   return axios.get(`/avata?id=${id}`);
}
const upload_avata = (id,fd) => {
	return axios.put(`/upload_avata?id=${id}`,fd);
};
//api product
const createProduct = (fd) => {
   return axios.post("/create_Product",fd);
}
const update_Product = (id,value) => {
   return axios.put(`/update_product?id=${id}`,value);
}
const upload_Product = (id, fd) => {
   return axios.put(`/upload_imager?id=${id}`, fd);
}
const delete_Product = (id) => {
   return axios.delete(`/delete_product?id=${id}`);
}
const readProduct = () => {
   return axios.get("/read_product");
}
const readProduct_page = (page) => {
   return axios.get(`/read_product?page=${page}&limit=6`);
}
//api
const read_Order = (page) => {
   return axios.get(`/read_order?page=${page}&limit=6`);
}
const delete_Order = (id) => {
   return axios.delete(`/delete_order?id=${id}`);
}
const update_Order = (id,value) => {
	return axios.put(`/update_order?id=${id}`,value);
};
const create_Order = (value) => {
	return axios.post(`/create_order`, value);
};
export {
   createProduct,
   readProduct,
   readProduct_page,
   delete_Product,
   update_Product,
   upload_Product,
   read_user,
   create_user,
   loginUser,
   image_avata,
   read_Order,
   delete_Order, update_Order, create_Order,
   upload_avata
}
