interface ErrorPageProps{
    error: Error;
    reset:()=>void;
}

interface ProductType{
    id:string;
    title:string;
    description:string;
    price:number;
    image:string;
    quantity:number;
    handle:string;
    tags:string;
}