import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],  
    totalQuantity: 0,  
};

const cartSlice = createSlice({

        name: 'cart',
        initialState,
        reducers: {
            addItemToCart(state, action) {
                const newItem = action.payload;
                const existingItem = state.items.find(item => item.id === newItem.id);
                state.totalQuantity++;
                if (!existingItem) {
                    state.items.push({
                        id: newItem.id,
                        title: newItem.title,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price,
                    });
                }else{
                    existingItem.quantity++;
                    existingItem.totalPrice += newItem.price;
                }
                    
            },
            decreaseItem(state, action) {
                const itemId = action.payload;
                const selectedItemIndex = state.items.findIndex(item => item.id === itemId);
                if (selectedItemIndex !== -1) {
                    const selectedItem = state.items[selectedItemIndex];
                    selectedItem.quantity--;
                    selectedItem.totalPrice -= selectedItem.price;
                    state.totalQuantity--;
                    if (selectedItem.quantity === 0) {
                        state.items.splice(selectedItemIndex, 1);
                    }
                }
            },
          
        
        }
});

// these exports should stay the way they are
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
