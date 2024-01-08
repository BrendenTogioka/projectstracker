import Profile from "@/components/Profile";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Profile />
      </div>
    </div>
  );
}
