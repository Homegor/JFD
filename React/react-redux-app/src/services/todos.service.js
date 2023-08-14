import httpService from "./http.service";

const todosEndpoint = "todos/";
const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndpoint, {
      params: {
        _page: 1,
        _limit: 2,
      },
    });
    return data;
  },
  fetchAdd: async () => {
    const { data } = await httpService.post(todosEndpoint, {
      params: {
        _title: "new tasks",
        _completed: "false",
      },
    });
    return data;
  },
};

export default todosService;
