import { WidgetItem } from "@/Components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export const metadata = {
  title: "Dashboard",
  description: "View Dashboard",
}

export default async function DashboardPage() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin')
  }


  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">

      <WidgetItem title="Usuario cpnectado S-Side">
        <span>{session.user?.name}</span>
        <span>{session.user?.image}</span>
        <span>{session.user?.email}</span>
      </WidgetItem>

    </div>
  );
}
