import type { Route } from "./+types/doc";

async function loader({ params }: Route.LoaderArgs) {

}

export default function Doc({
    params,
}: Route.ComponentProps){
    return(
        <h1>
            {params.docId}
        </h1>
    );
}