import { NetworkError, DataError } from "./CustomError.ts";

// TODO: Update API Simulation Functions to use the custom error classes when rejecting Promises.

// Simulates fetching a list of products, each with id, name, and price.
export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                // Resolve the Promise with an array of mock products after a 1 - second delay.
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                // Use Math.random() to sometimes reject the Promise with an error message, e.g., "Failed to fetch product catalog".
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};

// Simulates fetching reviews for a product.
export const fetchProductReviews = (productId: number): Promise<{ reviewNumber: number, review: string }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                // Resolve the Promise with an array of reviews after a 1.5 - second delay.
                resolve([
                    { reviewNumber: 1, review: "It's great!" },
                    { reviewNumber: 2, review: "It's decent." },
                ])
            } else {
                // Reject the Promise randomly with an error message, e.g., "Failed to fetch reviews for product ID ${productId}".
                reject(`Failed to fetch reviews for product ID ${productId}`)
            }
        }, 1500)
    })
}

// Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.
export const fetchSalesReport = (): Promise<{ totalSales: number, unitsSold: number, averagePrice: number }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                // Resolve the Promise with a mock sales report after a 1 - second delay.
                resolve({ totalSales: 4, unitsSold: 3, averagePrice: 3 })
            } else {
                // Reject randomly with an error message, e.g., "Failed to fetch sales report".
                reject("Failed to fetch sales report")
            }
        }, 1000)
    })
}
