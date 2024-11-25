/* eslint-disable react/prop-types */
import Icons from './Icons';

const Post = ({postImg, pfp, name, userName, location, comment}) => {
	return (
		<div className="bg-white text-base leading-none mb-7 pb-4">
      <div className="p-4 flex gap-2 items-center">
			<img src={pfp} alt="profile picture" className="h-10 " />
			<div className="">
				<h2 className="font-bold leading-none text-sm pb-1">{name}</h2>

				<p className="bg-red- leading-none text-xs">{location}</p>
			</div>
		</div>
			<img src={postImg} className="" alt="" />
			<Icons />
			<h3 className="font-bold text-base mb-2 mx-3">21,492 likes</h3>
			<p className='mx-3'>
				<span className="font-bold mr-2 mx">{userName}</span>{comment}
			</p>
		</div>
	);
};
export default Post;
