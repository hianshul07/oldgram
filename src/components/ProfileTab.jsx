import avatar from '../assets/avatar-1.png';

const ProfileTab = () => {
	return (
		<div className="p-4 flex gap-2 items-center">
			<img src={avatar} alt="profile picture" className="h-10 " />
			<div className="">
				<h2 className="font-bold leading-none text-sm">Vincent van Gogh</h2>

				<p className="bg-red- leading-none text-xs">Zudert, Netherlands</p>
			</div>
		</div>
	);
};
export default ProfileTab;
