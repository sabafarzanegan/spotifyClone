import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
const updateApiToken = async (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};
function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const { getToken } = useAuth();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        updateApiToken(token);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, [getToken]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader className="size-8 animate-spin text-emerald-800" />
      </div>
    );
  }
  return <div>{children}</div>;
}

export default AuthProvider;
