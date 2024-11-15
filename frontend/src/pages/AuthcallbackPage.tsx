import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { axiosInstance } from "@/lib/axios";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthcallbackPage() {
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    const syncUser = async () => {
      if (!user || !isLoaded) return null;
      try {
        const newUser = await axiosInstance.post("/auth/callback", {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          imageUrl: user.imageUrl,
        });
        console.log(newUser);
      } catch (error) {
        console.log(error);
      } finally {
        navigate("/");
      }
    };
    syncUser();
  }, [isLoaded, user, navigate]);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-[50%] bg-zinc-800">
        <CardHeader className="flex items-center justify-center">
          <Loader className="size-8 animate-spin text-emerald-600" />
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <p className="text-zinc-400 text-lg">در حال ورود...</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default AuthcallbackPage;
