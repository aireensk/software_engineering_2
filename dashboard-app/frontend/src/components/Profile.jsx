import { useEffect, useState } from "react";
import { getProfile } from "../services/api";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const data = await getProfile();
    setProfile(data);
  };

  return (
    <div>
      <h2>Profile</h2>
      {profile && <p>{profile.username}</p>}
    </div>
  );
}