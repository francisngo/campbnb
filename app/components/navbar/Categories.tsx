"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbTent, TbBeach, TbCamper, TbHome, TbKayak } from "react-icons/tb";
import Container from "../Container";
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
		icon: TbCamper,
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
	const params = useSearchParams();
	const category = params?.get("category");
	const pathname = usePathname();

	const isMainPage = pathname === "/";

	if (!isMainPage) {
		return null;
	}

	return (
		<Container>
			<div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
				{categories.map((item) => (
					<CategoryBox
						key={item.label}
						label={item.label}
						selected={category === item.label}
						icon={item.icon}
					/>
				))}
			</div>
		</Container>
	);
};

export default Categories;
