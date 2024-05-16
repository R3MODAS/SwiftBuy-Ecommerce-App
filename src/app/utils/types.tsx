export interface Product {
    id: number;
    category?: string;
    description: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    }
    title: string;
}

export interface Category {
    id: number;
    category: string;
}