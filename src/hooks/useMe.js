import { useSession } from "next-auth/react";
import useSWR from "swr";

async function updateLike(recipeId, like){

    return fetch('/api/like', {
        method :'PUT',
        body: JSON.stringify({id : recipeId, like})
    }).then(async (res) => {
        const data = await res.json();
        return data;
    })
}

export default function useMe() {
    const {data:session} = useSession();
    const { data: me, isLoading, error, mutate } = useSWR(session ? "/api/me" : null);

    const setLike = (recipeId, like) => {
        let filtered;

        if(like){
            const updateLike = [...me.like, recipeId]
            filtered = [...new Set(updateLike)];
        }else{
            filtered = me.like?.filter(item => item !== recipeId)
        }  

        return mutate(updateLike(recipeId, like), {
            optimisticData : {...me, like : filtered}
        })
    }   

    return { me, isLoading, error , setLike};
}
