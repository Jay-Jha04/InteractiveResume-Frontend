import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import { getProfile, getProfileImage } from "../../services/profile";
import { Bars } from "react-loading-icons";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [profileImage, setProfileImage] = useState({});

  useEffect(() => {
    async function fetchData() {
      const profile = await getProfile();
      setProfile(profile);

      if (profile?.profile_image) {
        const profileImage = await getProfileImage(profile.profile_image);
        setProfileImage(profileImage);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {Object.keys(profile).length === 0 && (
        <div className="row justify-content-center mt-5">
          <Bars
            height="10em"
            fill="#6070ee"
            stroke="transparent"
            speed="1"
            fillOpacity="1"
            strokeOpacity="1"
          />
        </div>
      )}
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
