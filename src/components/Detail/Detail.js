import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import "./Detail.css";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);
  return (
    <div className="detail__container">
      <div className="background">
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </div>
      <div className="imageTitle">
        <img alt={detailData.title} src={detailData.titleImg} />
      </div>
      <div className="contentMeta">
        <div className="controls">
          <button className="player">
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </button>
          <button className="trailer">
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </button>
          <div className="addlist">
            <span />
            <span />
          </div>
          <div className="groupwatch">
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="subTitle">{detailData.subTitle}</div>
        <div className="description">{detailData.description}</div>
      </div>
    </div>
  );
};
export default Detail;
