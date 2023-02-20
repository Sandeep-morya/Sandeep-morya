import "../Styles/skills.css";
import Title from "./Title";
import Card from "./Card";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";
import { VscDebug } from "react-icons/vsc";
import { GiTeacher } from "react-icons/gi";
import { FaDatabase, FaLaptopCode } from "react-icons/fa";

const Skills = () => {
	return (
		<div className="skills" id="skills">
			<Title title={"Skills"} />
			<div className="cards">
				<Card title={"ui design"} Icon={MdOutlineDesignServices}></Card>
				<Card title={"frontend"} Icon={FaLaptopCode}></Card>
				<Card title={"backend"} Icon={FaDatabase}></Card>
				<Card title={"mentor"} Icon={GiTeacher}></Card>
				<Card title={"debugging"} Icon={VscDebug}></Card>
				<Card title={"testing"} Icon={BiTestTube}></Card>
			</div>
		</div>
	);
};

export default Skills;
