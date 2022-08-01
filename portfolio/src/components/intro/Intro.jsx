import "./intro.css"
import MyPhotos from "../../img/BFGS0187.jpg"
const  Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className="i-hello">Salam mənim adım</h2>
            <h1 className="i-name">Eldəniz Bəşirovdur</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Frontend Devoloper</div>
                    <div className="i-title-item">Backend Devoloper</div>
                    <div className="i-title-item">Designer</div>
                    <div className="i-title-item">UI/UX Designer</div>
                    <div className="i-title-item">HR Menecer</div>
                    <div className="i-title-item">SMM Menecer</div>
                </div>
            </div>
            <div className="i-desc">
                Məqsədim bilik və bacarıqlarımdan istifadə edərək müştərilərə saytların yaradılması və ya dizayn edilməsində köməklik göstərnəkdir.
            </div>
        </div>
    
      </div>
      <div className="i-right">
        <div className="i-backphoto"></div>
        <img src={MyPhotos} alt="" className="i-img" />
      </div>
    </div>
  )
}
export default Intro;


