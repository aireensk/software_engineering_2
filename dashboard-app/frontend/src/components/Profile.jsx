import { useEffect, useState } from "react";
import { getProfile } from "../services/api";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await getProfile();
    setProfile(res.data);
  };

  return (
    <div>
      <h2>Profile</h2>
      {profile && <p>{profile.username}</p>}
    </div>
  );
}