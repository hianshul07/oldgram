import pfp from '../assets/pfp.png';
import logo from '../assets/oldagram-logo.svg';

const Navbar = () => {
	return (
		<div className="min-w-96 flex p-4 justify-between items-center bg-white border-b-2 border-[#C6C6C6]">
			<img src={logo} alt="oldgram logo" className='h-8'/>
			<img src={pfp} alt="profile pictute" className="h-10" />
		</div>
	);
};
export default Navbar;
