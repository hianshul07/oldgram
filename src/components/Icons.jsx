import Like from '../assets/like.svg';
import Comment from '../assets/comment.svg';
import Share from '../assets/share.svg';

const Icons = () => {
	return (
		<div className='h-6 gap-5 flex m-3'>
			<img src={Like} alt="" />
			<img src={Comment} alt="" />
			<img src={Share} alt="" />
		</div>
	);
};
export default Icons;
