import { useDispatch, useSelector } from "react-redux";

import { deleteUser } from "../../store/reducers/user";
import { RootState } from "../../store";

const ProfileList = () => {
  const favorites = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  return (
    <div className="flex-col w-full p-8 bg-slate-700 rounded-lg flex gap-4">
      {favorites.length != 0 ? (
        favorites.map((user) => (
          <div className="flex gap-4 bg-gray-900 p-2 rounded-lg w-full justify-between items-center">
            <img
              className="w-16 rounded-full"
              src={user.avatar_url}
              alt={user.name}
            />
            <h2 className="text-gray-200 text-xl">{user.name}</h2>
            <button
              onClick={() => dispatch(deleteUser(user))}
              className="bg-red-600 rounded-lg h-12 w-20 text-gray-300"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <h1 className="text-gray-100">No profile saved</h1>
      )}
    </div>
  );
};

export { ProfileList };
