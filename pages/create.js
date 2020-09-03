import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../auth/useAuth";
import { useUser } from "../user/useUser";
import CreateActivity from "../components/Activity/CreateActivity";

const Create = () => {
  const router = useRouter();
  const auth = useAuth(); // firebase auth methods
  const user = useUser(); // firestore methods

  useEffect(() => {
    if (!auth.user) {
      // redirect if there is no user
      router.push("/");
    } else {
    }
  }, []);

  return (
    <div className="container mx-auto px-4 mt-4">
      <CreateActivity />
    </div>
  );
};

export default Create;
