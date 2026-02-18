import type { Route } from "./+types/doc";
import type { DocumentRecord } from "./data"
import {getDocument} from "./data"


export async function loader({ params }: Route.LoaderArgs) {
    const document=await getDocument(params.docId);
    if(!document){
        throw new Response("Not Found",{status:404});
    }
    return {document}
}

export default function Doc({
    loaderData
}: Route.ComponentProps){
    const document=loaderData.document;
    return(
        <h1>
            {`${document.id}`}
        </h1>
    );
}