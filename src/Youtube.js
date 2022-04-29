import "./belajar.css";
import instagram from "./instagram.jpg";
import ylogo from "./ylogo.jpg";
import ylogo2 from "./ylogo2.jpg";

function Layouting() {
  return (
    <div className="container">
      <div className="left">
        <div className="judul">
          <img className="img-logo" src={ylogo2} alt="ylogo2" />
          <h1>Youtube</h1>
        </div>
        <div>
          <div className="beranda">
            <p>Beranda</p>
            <p>Eksplorasi</p>
            <p>Shorts</p>
            <p>Subscription</p>
            <hr class="solid"></hr>
            <p>koleksi</p>
            <p>Histori</p>
            <p>Video anda</p>
            <p>Tonton nanti</p>
            <p>Video yang disukai</p>
            <hr class="solid"></hr>
            <p>Youtube Premium</p>
            <p>Film</p>
            <p>Game</p>
            <p>Olahraga</p>
          </div>
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
}

export default Layouting;
