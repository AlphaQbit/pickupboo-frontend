export interface ItemCategory {
    categoryId: string;
    categoryName: string;
    categoryDescription: string;
}

export interface ShopItem {
    itemCategoryId: string;
    itemCategory: ItemCategory;
    itemId: string;
    itemName: string;
    itemDescription: string;
    itemShopId: string;
    itemPrice : number;
}

export interface Shop {
    openingHoursMon: number;
    openingHoursTue: number;
    openingHoursWed: number;
    openingHoursThur: number;
    openingHoursFri: number;
    openingHoursSat: number;
    openingHoursSun: number;
    shopId: string;
    shopCategory: number;
    shopName: string;
    priceRange: number;
    shopSlogan: string;
    shopLocationLat: number;
    shopLocationLong: number;
    phoneNumber: string;
    ownerUserId: string;
    owner: any;
    shopItems: ShopItem[];
}
