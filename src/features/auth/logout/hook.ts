import { axiosClient } from "@/lib/api_client";
import { currentUserAtom } from "@/store/user_atom";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const setCurrentUser = useSetAtom(currentUserAtom);
  const router = useRouter();

  const logout = async () => {
    try {
      const resut = await axiosClient.post("/api/auth/signout");
      if (resut.status === 200) {
        setCurrentUser(null);
        router.replace("/login");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return { logout };
};
