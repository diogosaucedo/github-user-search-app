import { User } from "../../models";

interface ProfileListProps {
  favorites: User[];
  setFavorites: (user: User[] | undefined) => void;
}

const ProfileList = ({ favorites, setFavorites }: ProfileListProps) => {
  const removeFavorite = (login: string) => {
    setFavorites(favorites.filter((f) => f.login !== login));
  };
  return (
    <div className="flex-col w-full p-8 bg-slate-700 rounded-lg flex gap-4">
      {favorites.map((user) => (
        <div className="flex gap-4 bg-gray-900 p-2 rounded-lg w-full justify-between items-center">
          <img
            className="w-16 rounded-full"
            src={user.avatar_url}
            alt={user.name}
          />
          <h2 className="text-gray-200 text-xl">{user.name}</h2>
          <button
            onClick={() => removeFavorite(user.login)}
            className="bg-red-600 rounded-lg h-12 w-20 text-gray-300"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export { ProfileList };
