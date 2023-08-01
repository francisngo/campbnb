import prisma from '@/app/lib/prisma';

export interface IListingsParams {
    userId?: string;
    guestCount?: number;
    carCount?: number;
    toiletCount?: number;
    startDate?: string;
    endDate?: string;
    locationValue?: string;
    category?: string;
}

export default async function getListings(
    params: IListingsParams
) {
    try {
        const {
            userId,
            guestCount,
            carCount,
            toiletCount,
            startDate,
            endDate,
            locationValue,
            category,
        } = params;

        let query: any = {};

        if (userId) {
            query.userId = userId;
        }

        if (category) {
            query.category = category;
        }

        if (carCount) {
            query.carCount = {
                gte: +carCount
            }
        }

        if (guestCount) {
            query.guestCount = {
                gte: +guestCount
            }
        }

        if (toiletCount) {
            query.toiletCount = {
                gte: +toiletCount
            }
        }

        if (locationValue) {
            query.locationValue = locationValue
        }

        if (startDate && endDate) {
            query.NOTE = {
                reservations: {
                    some: {
                        OR: [
                            {
                                endDate: { gte: startDate },
                                startDate: { lte: startDate }, 
                            },
                            {
                                startDate: { lte: endDate },
                                endDate: { gte: endDate }
                            }
                        ]
                    }
                }
            }
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc',
            }
        });

        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
          }));
      
          return safeListings;
    } catch (error: any) {
        throw new Error(error);
    } 
} 