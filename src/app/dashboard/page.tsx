import { WidgetItem } from "@/Components";


export const metadata = {
  title: "Dashboard",
  description: "View Dashboard",
}
export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem />
    </div>
  );
}
