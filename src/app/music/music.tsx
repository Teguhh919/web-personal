import Link from "next/link";
import Styles from "@/app/music/music.module.css";

const Comp = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.musicHome}>
        <img src="/images/Wt83Vm.jpg" alt="" />
        <div className={Styles.backgroundMusic}>
          <div className={Styles.quotesMusic}>
            <h1 data-aos="fade-down" data-aos-offset="100">
              MUSIC <span>PAGE</span>
            </h1>
            <p data-aos="fade-left" data-aos-offset="100">
              Temukan musik yang akan membawa Anda ke perjalanan emosional yang
              mendalam. Dari melodi yang menenangkan hingga ritme yang menggugah
              semangat. Jelajahi, dengarkan, dan nikmati pengalaman musik yang
              unik.
            </p>
          </div>
          <div className={Styles.spotify}>
            <img src="/images/spotifyss.png" alt="" />
            <Link href="https://open.spotify.com/" className={Styles.buttonSpo}>
              spotify
            </Link>
          </div>
        </div>
      </div>

      <div className={Styles.favorite}>
        <div className={Styles.favoriteBand}>
          <h1>MY FAVORITE BAND</h1>
          <p>
            ada yang se-genre? Saya sangat menyukai band-band yang beraroma
            klasik karena, Band-band klasik sering kali dianggap sebagai ikon
            dalam sejarah musik karena pengaruh besar mereka terhadap
            perkembangan genre dan budaya musik. Banyak band klasik yang
            dianggap legendaris karena karya-karya mereka yang abadi dan terus
            dinikmati oleh banyak generasi.
          </p>
        </div>
      </div>

      <div className={Styles.bandList}>
        <div className={Styles.filosofiBand}>
          <h1>The Beatles</h1>
          <p>
            "The Beatles, ikon abadi dari musik pop dan rock, telah meninggalkan
            jejak yang tak terhapuskan dalam sejarah musik. Dengan kejeniusan
            kreatif mereka dalam album-album seperti 'Sgt. Pepper's Lonely
            Hearts Club Band' dan 'Abbey Road', mereka mengubah cara kita
            melihat musik dan budaya pop. Dari 'Hey Jude' hingga 'Let It Be',
            warisan mereka terus menginspirasi generasi demi generasi."
          </p>
        </div>
        <Link
          href="https://open.spotify.com/playlist/21Gs9V9IfA9cw16tlznsHn?si=eba4fc854d76457f"
          className={Styles.band}
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <img
            src="/images/the beatles.jpeg"
            className={Styles.imgBand}
            data-aos="fade-up"
            data-aos-offset="100"
          />
          <h1>The Beatles</h1>
        </Link>
        <div className={Styles.filosofiBand}>
          <h1>AC/DC</h1>
          <p>
            "Dikenal dengan riff gitar yang menghentak dan energi panggung yang
            membara, AC/DC adalah salah satu band rock paling ikonik yang pernah
            ada. Lagu-lagu seperti 'Back in Black' dan 'Highway to Hell'
            membuktikan bahwa mereka adalah mahakarya rock n' roll. Dengan gaya
            khas mereka yang penuh tenaga dan semangat, AC/DC terus menghibur
            dan membakar semangat para penggemar di seluruh dunia."
          </p>
        </div>
        <Link
          href="https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un?si=TUClmHqoSAqI-ixo8qI6gw"
          className={Styles.band}
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <img
            src="/images/acdc.jpeg"
            className={Styles.imgBand}
            data-aos="fade-up"
            data-aos-offset="100"
          />
          <h1>AC/DC</h1>
        </Link>

        <div className={Styles.filosofiBand}>
          <h1>Green Day</h1>
          <p>
            Green Day telah menjadi suara punk rock yang berani dan bersemangat
            sejak awal 90-an. Dengan lirik yang tajam dan melodi yang catchy,
            mereka berhasil menciptakan karya yang tidak hanya menggugah
            semangat, tetapi juga mencerminkan ketidakpuasan sosial dan politik.
            Album seperti 'Dookie' dan 'American Idiot' menunjukkan kemampuan
            mereka untuk menangkap esensi punk dengan cara yang penuh energi dan
            relevansi.
          </p>
        </div>
        <Link
          href="https://open.spotify.com/playlist/21Gs9V9IfA9cw16tlznsHn?si=eba4fc854d76457f"
          className={Styles.band}
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <img
            src="/images/greenday.jpg"
            className={Styles.imgBand}
            data-aos="fade-up"
            data-aos-offset="100"
          />
          <h1>Green Day</h1>
        </Link>
        <div className={Styles.filosofiBand}>
          <h1>Nirvana</h1>
          <p>
            Nirvana adalah suara era grunge yang mentransformasikan musik rock
            dengan energi mentah dan lirik yang penuh emosi. Dipimpin oleh Kurt
            Cobain, mereka menciptakan lagu-lagu yang tidak hanya menggambarkan
            kegalauan zaman tetapi juga mengungkapkan perasaan pribadi dengan
            kejujuran yang sangat kuat. Dengan hits seperti 'Smells Like Teen
            Spirit', Nirvana tetap menjadi ikon yang mendefinisikan sebuah era.
          </p>
        </div>
        <Link
          href="https://open.spotify.com/playlist/21Gs9V9IfA9cw16tlznsHn?si=eba4fc854d76457f"
          className={Styles.band}
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <img
            src="/images/nirvana.jpg"
            className={Styles.imgBand}
            data-aos="fade-up"
            data-aos-offset="100"
          />
          <h1>Nirvana</h1>
        </Link>
        <div className={Styles.filosofiBand}>
          <h1>oasis</h1>
          <p>
            Oasis "Dari Manchester ke seluruh dunia, Oasis mengubah wajah musik
            Britpop dengan kekuatan dan keangkuhan mereka. Dengan hit-hits
            legendaris seperti 'Wonderwall' dan 'Don't Look Back in Anger',
            mereka menghadirkan energi dan emosi yang tak tertandingi. Musik
            Oasis bukan hanya tentang melodi, tetapi juga tentang semangat dan
            jiwa yang menginspirasi setiap pendengar."
          </p>
        </div>
        <Link
          href="https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4?si=G2vHyEDlQiy0A--nwbrO7w"
          className={Styles.band}
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <img
            src="/images/oasis.jpeg"
            className={Styles.imgBand}
            data-aos="fade-up"
            data-aos-offset="100"
          />
          <h1>Oasis</h1>
        </Link>
        <div className={Styles.filosofiBand}>
          <h1>Bread</h1>
          <p>
            "Soft rock dengan sentuhan melankolis, Bread menciptakan lagu-lagu
            yang penuh perasaan dan memikat hati. Dengan hits seperti 'Make It
            with You' dan 'Everything I Own', mereka menawarkan melodi yang
            lembut dan lirik yang penuh makna. Bread membawa keindahan dalam
            kesederhanaan, dan musik mereka terus menyentuh jiwa dan menyentuh
            hati."
          </p>
        </div>
        <Link
          href="https://open.spotify.com/artist/70ZTdbPEcEugBNay4MvxfL?si=QpPlg6rGSv-I5W02ZWUUfQ"
          className={Styles.band}
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <img
            src="/images/bread.jpeg"
            className={Styles.imgBand}
            data-aos="fade-up"
            data-aos-offset="100"
          />
          <h1>Bread</h1>
        </Link>
      </div>
    </div>
  );
};

export default Comp;
