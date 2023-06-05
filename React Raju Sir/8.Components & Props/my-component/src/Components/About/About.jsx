import './Style.css'
import img2 from '../images/p.jpg'
const About = () => {
    return (
        <>
           <div>
  <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
  {/*---- Include the above in your HEAD tag --------*/}
  <div className="aboutus-area">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="col-md-4 col-sm-6 col-xs-12">    
            <div className="aboutus-image float-left hidden-sm"><img src={img2} alt /></div>
          </div>
          <div className="col-md-8 col-sm-6 col-xs-12">
            <div className="aboutus-content ">
              <h1>About <span>Us</span></h1>
              <h4>Details</h4>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has oots in a piece of classitin literature from 45 BC, making it over 2000 years old. Richard McClint professor at Hamden dney College irginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.</p>
              <div className="counter ">
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
};
export default About;
