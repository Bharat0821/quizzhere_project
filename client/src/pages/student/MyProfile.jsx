import React, { useState, useEffect } from "react";
import { Avatar } from "@radix-ui/react-avatar";
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useLoadUserQuery, useUpdateUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";

const MyProfile = () => {
  const [name, setName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  const { data, isLoading: userLoading, refetch } = useLoadUserQuery();
  const [
    updateUser,
    {
      data: updateUserData,
      isLoading: updateUserLoading,
      isError,
      error,
      isSuccess,
    },
  ] = useUpdateUserMutation();

  const onChangeHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) setProfilePhoto(file);
  };

  const user = data?.user;

  const updateUserHandler = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("profilePhoto", profilePhoto);
    await updateUser(formData);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      refetch();
      toast.success(updateUserData?.message || "Profile Updated");
    }
    if (isError) {
      toast.error(error?.message || "Failed to update profile");
    }
  }, [isSuccess, isError, error, updateUserData]);

  if (userLoading) {
    return (
      <div className="flex justify-center items-center h-screen space-x-3">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <h1 className="text-lg font-medium text-gray-700">Loading...</h1>
      </div>
    );
  }

  if (!user) {
    return <p className="text-center mt-10 text-gray-600">No user data found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto my-16 px-4 ">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center md:text-left text-gray-800 mb-8 pt-11">
        My Profile
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white shadow-lg rounded-2xl p-6">
        {/* Avatar */}
        <div className="flex flex-col items-center md:items-start">
          <Avatar className="h-28 w-28 md:h-36 md:w-36 rounded-full overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <img
              className="rounded-full object-cover h-full w-full"
              src={
                user?.photoUrl ||
                "https://www.gstatic.com/webp/gallery3/1.sm.png"
              }
              alt={user.name}
            />
          </Avatar>
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          <p className="text-gray-900 font-semibold">
            Name:
            <span className="text-gray-700 font-normal ml-2">{user.name}</span>
          </p>
          <p className="text-gray-900 font-semibold">
            Email:
            <span className="text-gray-700 font-normal ml-2">{user.email}</span>
          </p>
          <p className="text-gray-900 font-semibold">
            Role:
            <span className="text-gray-700 font-normal ml-2">
              {user.role.toUpperCase()}
            </span>
          </p>

          {/* Edit Profile Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 shadow-md">
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-gray-800">
                  Edit Profile
                </DialogTitle>
                <DialogDescription className="text-gray-500">
                  Make changes to your profile information. Click save when
                  you're done.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 py-4">
                {/* Name Input */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-gray-700 font-medium">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full px-3 py-2 col-span-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Profile Photo Upload */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-gray-700 font-medium">
                    Profile Photo
                  </label>
                  <input
                    onChange={onChangeHandler}
                    type="file"
                    accept="image/*"
                    className="border border-gray-300 rounded-lg w-full px-3 py-2 col-span-3 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 cursor-pointer"
                  />
                </div>
              </div>

              <DialogFooter>
                <Button
                  disabled={updateUserLoading}
                  onClick={updateUserHandler}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
                >
                  {updateUserLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                      Wait
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
