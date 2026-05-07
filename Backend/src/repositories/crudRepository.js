export default function crudRepository(model) {
  return {
    create: async function (data) {
      const user = await model.create(data);
      return user;
    },
    getAll: async function () {
      const users = await model.find();
      return users;
    },
    getById: async function (id) {
      const users = await model.findById(id);
      return users;
    },
    delete: async function (id) {
      const user = await model.findByIdAndDelete(id);
      return user;
    },
    update: async function (id, data) {
      const user = await model.findByIdAndUpdate(id, data, { new: true });
      return user;
    }
  };
}
