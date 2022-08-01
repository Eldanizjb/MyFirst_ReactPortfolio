import './about.css'
import aboutImg from "../../img/FESS1129.JPG"
import awardImg from "../../img/IMG_E5942.JPG"
const About = () => {
    return (
      <div className="a">
        <div className="a-left">
            <div className="a-card bc"></div>
            <div className="a-card">
                <img src={aboutImg} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right"> 
            <h1 className='a-title'>Haqqımda</h1>
            <p className="a-title-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita atque, debitis magnam fugit est mollitia eveniet autem rerum officiis repellat consequuntur sint perspiciatis placeat veniam, dignissimos, incidunt explicabo? Delectus dicta incidunt perspiciatis, sequi itaque veniam sapiente.
                Molestiae numquam quos impedit eaque nihil incidunt
                atque possimus quidem fuga, tempora ut!</p>
            <p className="a-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consequatur sed quas nobis voluptatum 
                reprehenderit quasi. Officiis pariatur deserunt omnis suscipit dolores eaque assumenda exercitationem iusto, veniam, veritatis corporis commodi.
            </p>
            <h2 className="a-subtitle">Əlavələr</h2>
            <div className="a-award">
              <img src={awardImg} alt="" className="a-award-img" />
              <p className='a-awardText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat exercitationem, ut distinctio hic nam ab id blanditiis,
              tempore in ipsam iure quia eum voluptas sapiente beatae veritatis! Corporis, neque et!</p>
           </div>
          </div>
      </div>  
    )
  }

export default About;