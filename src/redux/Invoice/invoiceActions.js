import { ADD_DATE,ADD_TO_NAME,ADD_FROM_NAME,ADD_TO_EMAIL,ADD_FROM_EMAIL,ADD_TO_ADDRESS,ADD_FROM_ADDRESS,ADD_TAX,ADD_DISCOUNT,ADD_NOTE,ADD_ITEM,DELETE_ITEM, ADD_INVOICE_ID, ADD_TOTAL, ADD_SUBTOTAL } from "./invoiceTypes";

export const addDate = (productId) => ({
    type: ADD_DATE,
    payload: productId,
  });

  export const addInvoiceId = (productId) => ({
    type: ADD_INVOICE_ID,
    payload: productId,
  });

  export const addToName = (productId) => ({
    type: ADD_TO_NAME,
    payload: productId,
  });

  export const addFromName = (productId) => ({
    type: ADD_FROM_NAME,
    payload: productId,
  });

  export const addToEMail = (productId) => ({
    type: ADD_TO_EMAIL,
    payload: productId,
  });

  export const addFromEmail = (productId) => ({
    type: ADD_FROM_EMAIL,
    payload: productId,
  });

  export const addToAddress = (productId) => ({
    type: ADD_TO_ADDRESS,
    payload: productId,
  });

  export const addFromAddress = (productId) => ({
    type: ADD_FROM_ADDRESS,
    payload: productId,
  });

  export const addTax = (productId) => ({
    type: ADD_TAX,
    payload: productId,
  });
  
  export const addDiscount = (productId) => ({
    type: ADD_DISCOUNT,
    payload: productId,
  });

  export const addNote = (productId) => ({
    type: ADD_NOTE,
    payload: productId,
  });

  export const addItem = (productId) => ({
    type: ADD_ITEM,
    payload: productId,
  });

  export const deleteItem = (productId) => ({
    type: DELETE_ITEM,
    payload: productId,
  });

  export const addTotal = (Total) => ({
    type: ADD_TOTAL,
    payload: Total,
  });

  export const addSubTotal = (subTotal) => ({
    type: ADD_SUBTOTAL,
    payload: subTotal,
  });
