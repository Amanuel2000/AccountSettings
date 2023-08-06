import React, { ReactElement } from "react";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

// Represents props for UserAccountIcon component
export interface UserAccountIconProps {
    user: { name: string; image: string };
}

// Represents a cart item
export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    link: string;
    image: string;
    description: string;
    totalPrice?: number; // Optional total price for the item
}

// Represents the state of categories
export interface CategoryState {
    category: Category[]; // Array of Category objects
    loading: boolean; // Indicates if categories are being loaded
    error: string | null; // Holds any error occurred during category loading
}

// Represents a category response object
export interface CategoryResponse {
    id: string;
    name: string;
}

// Represents props for CartSideDrawer component
export interface CartSideDrawerProps {
    children: ReactElement; // Child components
    onClose: () => void; // Callback function to close the side drawer
}

// Represents the state of the cart
export interface CartState {
    items: CartItem[]; // Array of cart items
    totalPrice: number; // Total price of all items in the cart
    cartQuantity: number; // Total quantity of items in the cart
}

// Represents the state of the cart with thunks
export interface CartThunkState {
    state: CartState;
}

// Represents custom hooks for cart functionality
export interface CartHooks {
    cartItems?: CartItem[] | []; // Array of cart items or an empty array
    handleAddToCart?: (item: CartItem) => void; // Function to add an item to the cart
    handleRemoveFromCart?: (itemId: number) => void; // Function to remove an item from the cart
    handleUpdateCartItemQuantity?: (itemId: number, quantity: number) => void; // Function to update the quantity of a cart item
    handleClearCartItems?: () => void; // Function to clear all items from the cart
}
export interface ProductEntry {
    cartItem: CartItem; // CartItem object
}
// Represents a product
export interface Product {
    categId: number;
    categName: string;
    companyId: boolean;
    createDate: string;
    defaultCode: string;
    id: number;
    imageId: string;
    list_price: number;
    name: string;
    odooId: number;
    qtyAvailable: number;
    viewCount: number;
    visibility: string;
    description?:string;
}

// Represents props for MenuItem component
export interface MenuItemProps {
    tabs: TabsProps[]; // Array of TabsProps objects
}
export interface ProductEntryProps {
    product:Product
}
// Represents props for CartStick component
export interface CartStickProps {
    openDrawer: () => void; // Callback function to open the cart drawer
}

// Represents a category
export interface Category {
    id: string;
    name: string; 
}

// Represents props for ProductCard component
export interface ProductCardProps {
    product: Product; // CartItem object
}

// Represents props for ModalSimilarProductCarousel component
export interface ModalSimilarProductCarouselProp {
    product: Product[]; // Array of CartItem objects
}

// Represents props for HotSellersCarousel component
export interface HotSellersCarouselProp {
    product: Product[]; // Array of CartItem objects
}

// Represents props for ModalProductCard component
export interface ModalProductCardProps {
    product: Product; // CartItem object
}

// Represents props for Tabs component
export interface TabsProps {
    icon: React.ReactElement;
    label: string;
    url: string;
    description?: string; // Optional description for the tab
    rightSection?: ReactElement; // JSX element for the right section of the tab
}

// Represents props for Card component
export interface CardProps {
    image: ReactElement;
    title: string;
    category: string;
}

// Represents props for AddToCartButton component
export interface AddToCartButtonProps {
    cartItem: CartItem; // CartItem object
}

// Represents props for QuickViewButton component
export interface QuickViewButtonProps {
    cartItem: CartItem; // CartItem object
}

// Represents props for HeaderMenuToggleIcon component
export interface HeaderMenuToggleIconProps {
    tabs: TabsProps[]; // Array of TabsProps objects
}

// Represents props for Category component
export interface CategoryProps {
    name: string;
}

// Represents props for CategoryMenu component
export interface CategoryMenuProps {
    mainCategories: Category[]; // Array of main Category objects
}

// Represents props for HeaderTabs component
export interface HeaderTabsProps {
    tabs: TabsProps[]; // Array of TabsProps objects
    opened: boolean; // Indicates if the header tabs are opened
    onClose: () => void; // Callback function to close the header tabs
}

// Represents props for HeaderComponent
export interface HeaderComponentProps {
    user: { name: string; image: string };
    tabs: TabsProps[]; // Array of TabsProps objects
}

// Represents props for CartItem component
export interface CartItemProps extends Product {
    quantity: number; // Quantity of the cart item
}

// Represents props for CartDataTable component
export interface CartDataTableProps {
    cartItems: CartItem[]; // Array of CartItem objects
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>; // Function to update cart items
}

// Represents props for GetTotalPrice component
export interface GetTotalPriceProps {
    num1: number;
    num2: number;
}

// Represents props for MegaMenu component
export interface MegaMenuProps {
    categories: Category[]; // Array of Category objects
}

// Represents props for FooterCentered component
export interface FooterCenteredProps {
    links: { link: string; label: string }[]; // Array of link objects with link and label properties
}
