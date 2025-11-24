import { NetworkError, DataError } from "./CustomError.ts";

// TODO: Update API Simulation Functions to use these custom error classes when rejecting Promises.
export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};

export function fetchProductReviews(productId: number) {
    // Resolve the Promise with an array of reviews after a 1.5 - second delay.

    // Reject the Promise randomly with an error message, e.g., "Failed to fetch reviews for product ID ${productId}".
}

export function fetchSalesReport(totalSales: number, unitsSold: number, averagePrice: number) {
    // Resolve the Promise with a mock sales report after a 1 - second delay.

    // Reject randomly with an error message, e.g., "Failed to fetch sales report".
}