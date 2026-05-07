import User from '../schemas/user.js';
import crudRepository from './crudRepository.js';

export default function userRepository() {
  return {
    ...crudRepository(User),
    findByEmail: async function (email) {
      const user = await User.findOne({ email });
      return user;
    },
    findByUsername: async function (username) {
      const user = await User.findOne({ username }).select('-password');
      return user;
    }
  };
}
