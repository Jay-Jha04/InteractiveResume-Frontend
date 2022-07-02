import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import { getProfile, getProfileImage } from "../../services/profile";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [profileImage, setProfileImage] = useState({});

  useEffect(() => {
    async function fetchData() {
      const profile = await getProfile();
      const profileImage = await getProfileImage(profile._id);
      setProfile(profile);
      setProfileImage(profileImage);
    }
    fetchData();
  }, []);

  return (
    <>
      {Object.keys(profile).length > 0 && (
        <>
          <Header data={profile} profileImage={profileImage} />
          <Outlet context={[profile]} />
        </>
      )}
    </>
  );
};

export default Profile;
