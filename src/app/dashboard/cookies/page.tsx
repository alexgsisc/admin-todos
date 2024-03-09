import { TabBar } from "@/Components"

export const metadata = {
    title: "Cookies Page",
    description: "Get data for Rest Todos",
}

export default async function CookiesPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            <div className="flex flex-col">
                <span className="text-3xl">Tabs</span>
                <TabBar />
            </div>


        </div>
    )
}
