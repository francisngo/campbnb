import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

import ClientComponent from "@/app/components/ClientComponent";
import EmptyState from "@/app/components/EmptyState";

import Trips from "./Trips";

const TripsPage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<ClientComponent>
				<EmptyState title="Unauthorized" subtitle="Please login" />
			</ClientComponent>
		);
	}

	const reservations = await getReservations({ userId: currentUser.id });

	if (reservations.length === 0) {
		return (
			<ClientComponent>
				<EmptyState
					title="No trips found"
					subtitle="Looks like you haven't reserved any trips"
				/>
			</ClientComponent>
		);
	}

	return (
		<ClientComponent>
			<Trips reservations={reservations} currentUser={currentUser} />
		</ClientComponent>
	);
};

export default TripsPage;
