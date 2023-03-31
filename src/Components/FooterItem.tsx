import { IconType } from "react-icons/lib/esm/iconBase";
import "../Styles/footer_item.css";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";
// import { useInView } from "react-intersection-observer";
import Styles from "../Styles/observer.module.css";
import useObserver from "../hooks/useObserver";

interface Props {
	title: String;
	val: String;
	Icon: IconType;
	style?: React.CSSProperties;
}

const FooterItem = ({ title, val, Icon, style }: Props) => {
	const { color } = useContext(ThemeContext);
	const { ref, inView } = useObserver();
	return (
		<div
			style={{ ...style }}
			ref={ref}
			className={`footer_item ${inView && Styles.base}`}>
			<Icon size={40} color={color.main} />
			<div>
				<h3 style={{ color: color.main }}>{title}</h3>
				<p>{val}</p>
			</div>
		</div>
	);
};

export default FooterItem;
