const Profile = () => {
  return (
    <div className="w-full p-8 bg-slate-700 rounded-lg flex gap-4">
      <div>
        <img
          className="w-28"
          src="./image-user-placeholder.png"
          alt="Placeholder"
        />
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-gray-200 text-2xl font-bold">John Doe</h1>
            <p className="text-blue-600 text-sm">Software Engineer</p>
            <p className="text-gray-400 text-sm">This profile has no bio.</p>
          </div>
          <div>
            <p className="text-gray-200">Joined 25 Jan 2012</p>
          </div>
        </div>
        <div className="bg-slate-900 p-4 rounded-lg flex w-full justify-between">
          <div className="text-gray-300">
            <p className="text-base">Repos</p>
            <p className="text-2xl">8</p>
          </div>
          <div className="text-gray-300">
            <p className="text-base">Followers</p>
            <p className="text-2xl">3965</p>
          </div>
          <div className="text-gray-300">
            <p className="text-base">Following</p>
            <p className="text-2xl">9</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 text-slate-200 gap-6">
            <div className="flex gap-3 h-6 items-center">
              <img src="./icon-location.svg" alt="Location" />
              <p>San Francisco</p>
            </div>
            <div className="flex gap-3 h-6 items-center">
              <img src="./icon-location.svg" alt="Location" />
              <p>San Francisco</p>
            </div>
            <div className="flex gap-3 h-6 items-center">
              <img src="./icon-location.svg" alt="Location" />
              <p>San Francisco</p>
            </div>
            <div className="flex gap-3 h-6 items-center">
              <img src="./icon-location.svg" alt="Location" />
              <p>San Francisco</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Profile };
