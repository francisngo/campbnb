import ClientComponent from "@/app/components/ClientComponent";
import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";

import Properties from "./Properties";

const PropertiesPage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return <EmptyState title="Unauthorized" subtitle="Please login" />;
	}

	const listings = await getListings({ userId: currentUser.id });

	if (listings.length === 0) {
		return (
			<ClientComponent>
				<EmptyState
					title="No properties found"
					subtitle="Looks like you have no properties."
				/>
			</ClientComponent>
		);
	}

	return (
		<ClientComponent>
			<Properties listings={listings} currentUser={currentUser} />
		</ClientComponent>
	);
};

export default PropertiesPage;
