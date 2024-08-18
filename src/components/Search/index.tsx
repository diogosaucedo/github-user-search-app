import { useState } from "react";
import { User } from "../../models";

interface SearchProps {
  setUser: (user: User | undefined) => void;
}

const Search: React.FC<SearchProps> = ({ setUser }) => {
  const fetchUserByUsername = async (
    username: string
  ): Promise<User | undefined> => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user:", error);
      return undefined;
    }
  };

  const handleClick = async () => {
    if (!username) return;
    const user = await fetchUserByUsername(username.trim());
    setUser(user);
  };

  const [username, setUsername] = useState<string>();

  return (
    <div className="w-full h-14 bg-slate-700 rounded-lg flex items-center px-2">
      <img className="px-2" src="./icon-search.svg" alt="Icone de busca" />
      <input
        onChange={(e) => setUsername(e.currentTarget.value)}
        className="w-full h-11 bg-transparent outline-none"
        type="text"
        placeholder="Search for developers..."
      />
      <button
        onClick={handleClick}
        className="text-slate-100 bg-blue-700 w-24 h-11 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export { Search };
