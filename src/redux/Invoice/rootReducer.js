import { ADD_DATE,ADD_DISCOUNT,ADD_ITEM,ADD_TAX,ADD_TO_NAME,DELETE_ITEM,ADD_FROM_NAME, ADD_TO_EMAIL, ADD_FROM_EMAIL, ADD_TO_ADDRESS, ADD_FROM_ADDRESS, ADD_NOTE, ADD_INVOICE_ID, ADD_TOTAL, ADD_SUBTOTAL } from "./invoiceTypes";

const initialState = {
    invoiceData:{
        id:0,
        dueDate:"",
        toName:"",
        fromName:"",
        toEmail:"",
        fromEmail:"",
        toAddress:"",
        fromAddress:"",
        taxRate:0,
        discountRate:0,
        note:"",
        total:0,
        subTotal:0,
    },
    Item:[],
    
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TAX:
            const tax = action.payload;
              
            return{
                ...state,
                invoiceData:{
                    ...state.invoiceData,
                    taxRate: tax
                }
            };
        
            case ADD_DISCOUNT:
                const discount = action.payload;
                  
                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData,
                        discountRate: discount
                    }
                };
            
            case ADD_DATE:
                const date = action.payload;
                      
                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData,
                        dueDate: date
                    }
                };

            case ADD_TO_NAME:
                const toName = action.payload;

                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData,
                        toName: toName
                    }
                }
            
            case ADD_FROM_NAME:
                const fromName = action.payload;
    
                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData,
                        fromName: fromName
                    }
                }
              
            case ADD_TO_EMAIL:
                const toEmail = action.payload;

                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData, 
                        toEmail: toEmail
                    }
                }
  

            case ADD_FROM_EMAIL:
                const fromEmail = action.payload;

                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData,
                        fromEmail: fromEmail
                    }
                }


            case ADD_TO_ADDRESS:
                const toAddress = action.payload;

                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData,
                        toAddress:toAddress
                    }
                }
                
            case ADD_FROM_ADDRESS:
                const fromAddress = action.payload;

                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData,
                        fromAddress:fromAddress
                    }
                }
            case ADD_NOTE:
                const note = action.payload;

                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData,
                        note:note
                    }
                }

            case ADD_TOTAL:
                const total = action.payload;
    
                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData,
                        total:total
                    }
                }


            case ADD_SUBTOTAL:
                const subtotal = action.payload;
        
                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData,
                        subtotal:subtotal
                    }
                }
    

            case ADD_ITEM:
                const newItem = action.payload;
                
                return{
                    ...state,
                    Item:[...state.Item,newItem]
                }

            case DELETE_ITEM:
                const itemIdToDelete = action.payload;

                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData,
                        Item: state.invoiceData.Item.filter(item => item.id !== itemIdToDelete)
                    }
                }


            case ADD_INVOICE_ID:
                const id = action.payload;
                      
                return{
                    ...state,
                    invoiceData:{
                        ...state.invoiceData,
                        id: id
                    }
                };
                
        default:
        return state;
    }
};

export default rootReducer;