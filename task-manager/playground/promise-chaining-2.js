require("../src/db/mongoose");
const Task = require("../src/models/task");
const User = require("../src/models/user");

// Task.findByIdAndDelete("63a9f3fd11bd04aeef908bde")
//   .then((task) => {
//     console.log(task + "deleted successfully");
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("63aa40088a271cc569cbe167")
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
