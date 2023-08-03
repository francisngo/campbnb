import ClientComponent from "@/app/components/ClientComponent";
import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";

import Favorites from "./Favorites";

const FavoritesPage = async () => {
	const listings = await getFavoriteListings();
	const currentUser = await getCurrentUser();

	if (listings.length === 0) {
		return (
			<ClientComponent>
				<EmptyState
					title="No favorites found."
					subtitle="Looks like you have no favorite listings."
				/>
			</ClientComponent>
		);
	}

	return (
		<ClientComponent>
			<Favorites listings={listings} currentUser={currentUser} />
		</ClientComponent>
	);
};

export default FavoritesPage;
