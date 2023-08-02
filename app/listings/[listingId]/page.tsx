import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";

import ClientComponent from "@/app/components/ClientComponent";
import EmptyState from "@/app/components/EmptyState";

import Listing from "./Listing";

interface IParams {
	listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
	const currentUser = await getCurrentUser();
	const reservations = await getReservations(params);
	const listing = await getListingById(params);

	if (!listing) {
		return (
			<ClientComponent>
				<EmptyState />
			</ClientComponent>
		);
	}

	return (
		<ClientComponent>
			<Listing
				currentUser={currentUser}
				listing={listing}
				reservations={reservations}
			/>
		</ClientComponent>
	);
};

export default ListingPage;
