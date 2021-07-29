// Payload:

export interface TransactionPayload {

    card: {
        id?: number
        card_number: string;
        cvv: number;
        expiry_date: string;
    };

    // Destination User ID
    destination_user_id: number;

    // Value of the Transaction
    value_payment: number;

}
