export interface IAsset {
    id:number;
    img?: string;
    title: string;
    price: number;
    rate: number;
    undiscounted?: number
}

export interface IAssetByBasket {
    asset: IAsset;
    count: number;
}
