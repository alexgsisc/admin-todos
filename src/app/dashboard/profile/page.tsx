'use client';

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ProfilePage() {
    const { data: session } = useSession();

    useEffect(() => {
        console.log('Client side')
    }, [])

    return (
        <div>
            <h1>Pagina de Perfil</h1>
            <hr />
            <div className="flex flex-col">
                <span>{session?.user?.name ?? "Not name"}</span>
                <span>{session?.user?.email ?? "Not email"}</span>
                <span>{session?.user?.image ?? "Not image"}</span>
            </div>
        </div>
    );
}