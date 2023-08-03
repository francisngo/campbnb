"use client";

import { PulseLoader } from "react-spinners";

const Loader = () => {
	return (
		<div
			className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
		>
			<PulseLoader size={25} color="#047857" />
		</div>
	);
};

export default Loader;
