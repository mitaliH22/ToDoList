const random = Math.floor(Math.random() * 100);
const data = [
  {
    name: "ToDo-List",
    id: 101,
  },
  {
    name: "Work-In",
    id: 102,
  },
  {
    name: "Finished",
    id: 103,
  },
];

const items = [{ id:random, text: "", taskType: "" }];

export { data, items };
