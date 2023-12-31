export const dynamic = "force-dynamic";

import ClientComponent from "./components/ClientComponent";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import ListingCard from "@/app/components/listings/ListingCard";

import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";

interface HomeProps {
	searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
	const listings = await getListings(searchParams);
	const currentUser = await getCurrentUser();

	if (listings.length === 0) {
		return (
			<ClientComponent>
				<EmptyState showReset />
			</ClientComponent>
		);
	}

	return (
		<ClientComponent>
			<Container>
				<div className="pt-24 grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
					{listings.map((listing: any) => (
						<ListingCard
							currentUser={currentUser}
							key={listing.id}
							data={listing}
						/>
					))}
				</div>
			</Container>
		</ClientComponent>
	);
};

export default Home;
