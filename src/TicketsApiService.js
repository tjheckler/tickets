import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:49967/api/Tickets",
  json: true
});

export default {
  async execute(method, resource, data) {
    return client({
      method,
      url: resource,
      data
    }).then(req => {
      return req.data;
    });
  },

  getAll() {
    return this.execute("get", "/", "tickets");
  },
  create(data) {
    return this.execute("post", "/", "tickets", data);
  },
  update(id, data) {
    return this.execute("put", `/${id}`, "tickets", data);
  },
  delete(id) {
    return this.execute("delete", `/${id}`, "tickets");
  }
};
