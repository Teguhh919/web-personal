import { BiPlay } from "react-icons/bi";
import Link from "next/link";
import Styles from "@/components/component.module.css";
const HomePage = () => {
  return (
    <div className={Styles.container}>
      {/* HOME SECTION START */}
      <section className={Styles.home}>
        {/* BLOG 1 */}
        <div className={Styles.blog1}>
          <h1>My Hobbies</h1>
          <div className={Styles.Hobies}>
            <div className={Styles.imgHobies}>
              <img
                src="./images/game1.webp"
                data-aos="fade-right"
                data-aos-offset="100"
              />
              <h1>Playing Game</h1>
            </div>
            <div className={Styles.imgHobies}>
              <img
                src="./images/listening.jpg"
                data-aos="fade-down"
                data-aos-offset="100"
              />
              <h1>Listening To Music</h1>
            </div>
            <div className={Styles.imgHobies}>
              <img
                src="./images/ngoding.webp"
                data-aos="fade-left"
                data-aos-offset="100"
              />
              <h1>Coding </h1>
            </div>
          </div>
          <div className={Styles.defenisi}>
            <h1>AboutMe</h1>
            <p>
              As a passionate gamer, I find challenge and enjoyment in every
              level of play. My love of music complements my digital world,
              inspiring creativity and providing rhythm to every project. Behind
              the scenes, I am a frontend developer who turns code into
              beautiful and functional designs. The combination of these three
              passions—gaming, music, and web development—forms a harmonious
              balance in my life, allowing me to continue to innovate and
              explore the world in unique and fun ways.
            </p>
          </div>
        </div>
        {/* BLOG 2 */}
        <div className={Styles.blog2}>
          <div className={Styles.imgHome}>
            <img src="./images/paaaadi.jpeg" alt="" />
            <div className={Styles.aboutHome}>
              <h1>TEGUHKAJANG</h1>
              <p>
                An avid gamer with brilliant coding skills, I am a frontend
                developer who transforms code into stunning designs. Behind the
                computer screen, I also find rhythm in music, which is my
                constant companion when exploring the digital world. My
                creativity flows between pixels and beats, creating harmony in
                every aspect of my life.
              </p>
            </div>
          </div>
          <div className={Styles.music}>
            <h3>I Love My Playlist</h3>
            <Link
              href=" https://open.spotify.com/track/1Y3LN4zO1Edc2EluIoSPJN?si=28f3061c76424bcc"
              className="flex justify-between w-full h-cus shadow-xl items-center text-white hover:bg-orange-500 transition-all duration-300"
            >
              <h1 className="ml-4 ">Until I Found You</h1>
              <h1>artis</h1>
              <BiPlay className="mr-6" />
            </Link>

            <Link
              href="https://open.spotify.com/track/4SqWKzw0CbA05TGszDgMlc?si=36fb0fea2b4e4c5e"
              className="flex justify-between w-full h-cus shadow-xl items-center text-white hover:bg-orange-500 transition-all duration-300"
            >
              <h1 className="ml-4">I Love You So</h1>
              <h1>artis</h1>
              <BiPlay className="mr-6" />
            </Link>

            <Link
              href="https://open.spotify.com/track/4SqWKzw0CbA05TGszDgMlc?si=36fb0fea2b4e4c5e"
              className="flex justify-between w-full h-cus shadow-xl items-center text-white hover:bg-orange-500 transition-all duration-300"
            >
              <h1 className="ml-4">Sleeping Through My Fingers</h1>
              <h1>artis</h1>
              <BiPlay className="mr-6" />
            </Link>

            <Link
              href="https://open.spotify.com/track/4SqWKzw0CbA05TGszDgMlc?si=36fb0fea2b4e4c5e"
              className="flex justify-between w-full h-cus shadow-xl items-center text-white hover:bg-orange-500 transition-all duration-300"
            >
              <h1 className="ml-4">i love you so</h1>
              <h1>artis</h1>
              <BiPlay className="mr-6" />
            </Link>

            <Link
              href="https://open.spotify.com/track/7iN1s7xHE4ifF5povM6A48?si=e4b421f1c59246e6"
              className="flex justify-between w-full h-cus shadow-xl items-center text-white hover:bg-orange-500 transition-all duration-300"
            >
              <h1 className="ml-4">Let It Be</h1>
              <h1>artis</h1>
              <BiPlay className="mr-6" />
            </Link>
          </div>
        </div>
      </section>
      {/* HOME SECTION END */}
    </div>
  );
};

export default HomePage;
