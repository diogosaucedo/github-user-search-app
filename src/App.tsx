import { Header, Search, Profile, ProfileList } from "@components";
import { useState } from "react";
import { User } from "./models";

export default function App() {
  const [user, setUser] = useState<User>();

  return (
    <div className="w-full max-w-3xl h-fit flex flex-col gap-4">
      <Header />
      <Search setUser={setUser} />
      {user ? (
        <Profile user={user} />
      ) : (
        <h1 className="text-gray-100">Nothing to show</h1>
      )}
      <h1 className="text-gray-200 text-xl">Saved Profiles</h1>
      <ProfileList />
    </div>
  );
}
