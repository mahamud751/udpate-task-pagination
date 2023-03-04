import Pagination from "../components/pagination";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <div className={`${styles.desktop}`}>
        <h1 className="text-center mt-3">Create A Card Component</h1>
        <div className="card">
          <div className="d-flex">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQHV_dnSt_UaM64WCIdXp3kgjGHJRZTv6Fzt80oeiDMfc3Ltf"
              alt=""
            />
            <div className="ms-5 mt-3">
              <h1>Title Lorem lpsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ad ab amet facilis soluta, illo inventore est eveniet maiores
                aliquid vero perspiciatis labore voluptas suscipit dolorum a.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.mobile}`}>
        <div className="card" style={{ width: "100%" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQHV_dnSt_UaM64WCIdXp3kgjGHJRZTv6Fzt80oeiDMfc3Ltf"
            alt=""
            className="img-fluid card-img-top"
          />
          <div class="card-body">
            <h1>Title </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad
              ab amet facilis soluta, illo inventore est eveniet maiores aliquid
              vero perspiciatis labore voluptas suscipit dolorum a. ab amet
              facilis soluta, vero labore voluptas suscipit dolorum
            </p>
          </div>
        </div>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}
