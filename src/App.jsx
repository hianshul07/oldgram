import Post from './components/Post';
import Navbar from './components/Navbar';
import postImg1 from './assets/post-image-1.png';
import postImg2 from './assets/post-image-2.png';
import postImg3 from './assets/post-image-3.png';
import avatar1 from './assets/avatar-1.png';
import avatar2 from './assets/avatar-2.png';
import avatar3 from './assets/avatar-3.png';

const App = () => {
	return (
		<div className="w-full py-16 flex items-center justify-center bg-[#878787]">
			<div className="bg-[#ededed] max-w-96">
				<Navbar />
				<Post
					postImg={postImg1}
					pfp={avatar1}
					name="Vincent van Gogh"
					userName="vincey1853"
          comment="just took a few mushrooms lol"
					location="Zudert, Netherlands"
				/>
				<Post
					postImg={postImg2}
					pfp={avatar2}
					name="Gustave Courbet"
					userName="gus1819"
          comment="i'm feelin a bit stressed tbh"
					location="Ornans, France"
				/>
				<Post
					postImg={postImg3}
					pfp={avatar3}
					name="Joseph Ducreux"
					userName="jd1735"
          comment="gm friends! which coin are YOU stacking up today?? post below and WAGMI!"
					location="Paris, France"
				/>
			</div>
		</div>
	);
};
export default App;

