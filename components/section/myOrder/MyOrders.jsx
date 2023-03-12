import { Container } from "@/components/common";
import { ListOrders } from "./ListOrders";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export function MyOrders() {
    const { data: session } = useSession();
    const router = useRouter();

    if(!session) {
        setTimeout(() => router.push("/login"));
    }
    
    return (
        <Container>
            <ListOrders />
        </Container>
    );
}
