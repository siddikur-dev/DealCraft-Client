import React, { useContext, useRef, useState } from "react";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../../Context/AuthContext";
import Swal from "sweetalert2";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, emailVerified, photoURL } = user;

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // useRef for uncontrolled inputs
  const nameRef = useRef();
  const photoRef = useRef();

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedName = nameRef.current.value;
    const updatedPhoto = photoRef.current.value;

    updateProfile(user, {
      displayName: updatedName,
      photoURL: updatedPhoto,
    })
      .then(() => {
        setIsEditing(false);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Profile has updated",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        alert("Error updating profile: " + error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="min-h-[80vh] bg-base-200 py-12 px-4 flex justify-center items-center">
      <title>Profile - Toy Universe</title>
      <div className="bg-base-100 shadow-xl rounded-2xl w-full max-w-3xl overflow-hidden">
        {/* Top Cover / Banner */}
        <div className="h-40 bg-gradient from-primary to-secondary bg-[url('https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000')] bg-cover bg-center relative">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src={
                photoURL ||
                "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              }
              alt={displayName}
              className="w-32 h-32 rounded-full border-4 border-base-100 shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 pb-10 px-6 text-center">
          {!isEditing ? (
            <>
              <h2 className="text-3xl font-bold text-primary">
                Name: {displayName}
              </h2>
              <p className="text-base-content/70 mt-1">Email: {email}</p>
              {/* <p className="text-base-content/70 mt-1">
                Email verification: {emailVerified ? "Verified" : "Unverified"}
              </p> */}

              <div className="mt-8">
                <button
                  className="btn btn-primary gap-2"
                  onClick={() => setIsEditing(true)}
                >
                  <FaEdit /> Edit Profile
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="flex flex-col items-center gap-4">
                <input
                  type="text"
                  className="input input-bordered w-full max-w-md"
                  placeholder="Name"
                  defaultValue={displayName}
                  ref={nameRef}
                />
                <input
                  type="text"
                  className="input input-bordered w-full max-w-md"
                  placeholder="Photo URL"
                  defaultValue={photoURL}
                  ref={photoRef}
                />
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <button
                  type="submit"
                  className="btn btn-primary gap-2"
                  disabled={loading}
                >
                  <FaSave /> {loading ? "Saving..." : "Save"}
                </button>
                <button
                  type="button"
                  className="btn btn-outline gap-2"
                  onClick={() => setIsEditing(false)}
                >
                  <FaTimes /> Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
