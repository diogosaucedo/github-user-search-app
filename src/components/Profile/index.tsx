import { User } from "../../models";

interface ProfilePros {
  user: User;
  favorites: User[];
  setFavorites: (user: User[] | undefined) => void;
}
const Profile = ({ user, favorites, setFavorites }: ProfilePros) => {
  const handleFavoriteClick = (user: User) => {
    setFavorites([user, ...favorites]);
  };
  const dataFormatada = new Date(user.created_at).toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="w-full p-8 bg-slate-700 rounded-lg flex gap-4">
      <div>
        <img
          className="w-28 rounded-full"
          src={user.avatar_url}
          alt="Placeholder"
        />
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-gray-200 text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-300 text-sm">{user.company}</p>
            <p className="text-gray-400 text-sm">{user.bio}</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm">{dataFormatada}</p>
          </div>
        </div>
        <div className="bg-slate-900 p-4 rounded-lg flex w-full justify-between">
          <div className="text-gray-300">
            <p className="text-base">Repos</p>
            <p className="text-2xl">{user.public_repos}</p>
          </div>
          <div className="text-gray-300">
            <p className="text-base">Followers</p>
            <p className="text-2xl">{user.followers}</p>
          </div>
          <div className="text-gray-300">
            <p className="text-base">Following</p>
            <p className="text-2xl">{user.following}</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => handleFavoriteClick(user)}
            className="text-slate-100 bg-blue-700 w-60 h-11 rounded-lg"
          >
            Add to favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export { Profile };
