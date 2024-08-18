import { Header, Search, Profile } from "@components";

export default function App() {
  return (
    <div className="w-full max-w-3xl h-fit flex flex-col gap-4">
      <Header />
      <Search />
      <Profile />
    </div>
  );
}
