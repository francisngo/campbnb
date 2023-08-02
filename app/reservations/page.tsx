import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

import ClientComponent from "@/app/components/ClientComponent";
import EmptyState from "@/app/components/EmptyState";

import Reservations from "./Reservations";

const ReservationsPage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<ClientComponent>
				<EmptyState title="Unauthorized" subtitle="Please login" />
			</ClientComponent>
		);
	}

	const reservations = await getReservations({ authorId: currentUser.id });

	if (reservations.length === 0) {
		return (
			<ClientComponent>
				<EmptyState
					title="No reservations found."
					subtitle="Looks like you have no reservations on your properties."
				/>
			</ClientComponent>
		);
	}

	return (
		<ClientComponent>
			<Reservations
				reservations={reservations}
				currentUser={currentUser}
			/>
		</ClientComponent>
	);
};

export default ReservationsPage;
