import type { Route } from "./+types/doc";
import type { DocumentRecord } from "./data"
import {getDocument} from "./data"


async function loader({ params }: Route.LoaderArgs) {
    const document=await getDocument(params.docId);
    if(!document){
        throw new Response("Not Found",{status:404});
    }
    return {document}
}

export default function Doc({
    loaderData
}: Route.ComponentProps){
    //loader data can't be undefined since it was literally checked in the loader -_-
    const document=loaderData.document;
    return(
        <h1>
            {`${document.id}`}
        </h1>
    );
}