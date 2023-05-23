import { Suspense } from "react";

export default function MainLayout({ children }: any) {
    return (
        <Suspense fallback={<div></div>}>
            {children}
        </Suspense>
    )
}