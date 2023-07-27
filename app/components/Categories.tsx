import Container from "./Container";

import { TbTent, TbBeach, TbCaravan, TbKayak, TbHome } from "react-icons/tb";
import CategoryBox from "./CategoryBox";

export const categories = [
	{
		label: "Tent",
		icon: TbTent,
		description: "This property is for tent camping",
	},
	{
		label: "Beach",
		icon: TbBeach,
		description: "This property is for beach camping",
	},
	{
		label: "RV",
		icon: TbCaravan,
		description: "This property is for RV camping",
	},
	{
		label: "Lake",
		icon: TbKayak,
		description: "This property is for lake camping",
	},
	{
		label: "Cabin",
		icon: TbHome,
		description: "This property is for cabin camping",
	},
];

const Categories = () => {
	return (
		<Container>
			<div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
				{categories.map((category) => (
					<CategoryBox
						key={category.label}
						label={category.label}
						description={category.description}
						icon={category.icon}
					/>
				))}
			</div>
		</Container>
	);
};

export default Categories;
