//Providing full document structure; a "template" of sorts
type DocumentMutation={
    id: string
};

//just making these the same for now to get things functional
export type DocumentRecord=DocumentMutation &{

};

//Fake documents for this demo. will ofc be an actual backend when development starts, 
//a lot of these patterns and syntax i pulled straight from the react router tutorial

const fakeDocuments={
    records: {} as Record<string,DocumentRecord>,
    
    async getAll(): Promise<DocumentRecord[]>{
        return Object.keys(fakeDocuments.records).map((key)=>fakeDocuments.records[key]);
    },

    async get(id: string): Promise<DocumentRecord | null>{
        return fakeDocuments.records[id] || null;
    },

    async create(values:DocumentMutation):Promise<DocumentRecord>{
        const id=values.id;
        const newDocument={id};
        fakeDocuments.records[id]=newDocument;
        return newDocument;
    }
}

//helpfer functions

export async function getDocument(id: string){
    return fakeDocuments.get(id);
}

export async function getDocuments(){
    return fakeDocuments.getAll();
}

//the actual fake documents

[
    {id:"doc1"}, {id:"doc2"}, {id:"doc3"}
].forEach((document)=>{
    fakeDocuments.create({
        ...document,
        id: `${document.id}`
    });
});