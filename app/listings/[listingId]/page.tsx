import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";

import ClientComponent from "@/app/components/ClientComponent";
import EmptyState from "@/app/components/EmptyState";

import Listing from "./Listing";

interface IParams {
	listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
	const currentUser = await getCurrentUser();
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
			<Listing currentUser={currentUser} listing={listing} />
		</ClientComponent>
	);
};

export default ListingPage;
