import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function useMe() {
    const {data:session} = useSession();
    const { data: me, isLoading, error, mutate } = useSWR(session ? "/api/me" : null);

    return { me, isLoading, error };
}
