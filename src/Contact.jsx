import { useState } from "react";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [birthYear, setBirthYear] = useState(2000);
    const [sport, setSport] = useState(50);
    const [education, setEducation] = useState(50);
    const [entertainment, setEntertainment] = useState(50);
    const [health, setHealth] = useState(50);
    const [technical, setTechnical] = useState(50);
    const [business, setBusiness] = useState(50);
    const [gaming, setGaming] = useState(50);
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your form submission logic here
        console.log('Form submitted');
      };
    return (
        <div className="contact">
        <div className="container">
            <section className="info">
                <div>
                     <h1 className="f-d3 f-md-d2">Login to more discounts</h1>
<form onSubmit={handleSubmit}>
        <label htmlFor="username" className="mb-2">
          Full Name
          <input type="text" className="my-form w-100" placeholder="Enter your name"style={{textAlign: 'left',borderRadius:20}} id="username" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        <br />
  
        <label htmlFor="email" className="mb-2">
            Email Address
          <input type="email" className="my-form w-100" placeholder="Your contact email"style = {{textAlign: 'left',borderRadius:20}} id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        <br />
  
        <label>
          Gender:
          <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
  
        <label>
          Birth Year:
          <select className="form-select" value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
            {Array.from({ length: 75 }, (_, index) => 1950 + index).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <label>
          Location:
          <select className="form-select" value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
            {Array.from({ length: 75 }, (_, index) => 1950 + index).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        </label>
        <br /><br />
  
        <label>
          Sport:
          <input type="range" className="form-range" min="0" max="100" value={sport} onChange={(e) => setSport(e.target.value)} />
          <span>{sport}</span>
        </label>
        <br /><br />
  
        <label>
          Education:
          <input type="range" className="form-range" min="0" max="100" value={education} onChange={(e) => setEducation(e.target.value)} />
          <span>{education}</span>
        </label>
        <br /><br />
  
        <label>
          Entertainment:
          <input type="range" className="form-range" min="0" max="100" value={entertainment} onChange={(e) => setEntertainment(e.target.value)} />
          <span>{entertainment}</span>
        </label>
        <br /><br />
  
        <label>
          Health:
          <input type="range" className="form-range" min="0" max="100" value={health} onChange={(e) => setHealth(e.target.value)} />
          <span>{health}</span>
        </label>
        <br /><br />
  
        <label>
          Technical:
          <input type="range" className="form-range" min="0" max="100" value={technical} onChange={(e) => setTechnical(e.target.value)} />
          <span>{technical}</span>
        </label>
        <br /><br />
  
        <label>
          Business:
          <input type="range" className="form-range" min="0" max="100" value={business} onChange={(e) => setBusiness(e.target.value)} />
          <span>{business}</span>
        </label>
        <br /><br />
  
        <label>
          Gaming:
          <input type="range" className="form-range" min="0" max="100" value={gaming} onChange={(e) => setGaming(e.target.value)} />
          <span>{gaming}</span>
        </label>
        <br /><br />
        <button className="but" type="submit">Submit</button>
      </form>
                       </div>
                 <div>
                     <h1 className="f-d3 f-md-d2">Contact Info</h1>
                     <p className="text-muted mb-1">Syria , Aleppo</p>
                     <p className="text-muted">+963 996 235 079</p>
                     <h1 className="f-d5 f-md-d4 email">mahersefo2001@gmail.com</h1>
                     <p className="f-d4 mt-4">Follow Us</p>
                     <ul className="social">
                         <li className="twitter"><a href="#"><img src="../images/twitterIconWhite.svg" alt=""/></a></li>
                         <li className="facebook"><a href="#"><img src="../images/facebookIconWhite.svg" alt=""/></a></li>
                         <li className="instagram"><a href="#"><img src="../images/instagramIconWhite.svg" alt=""/></a></li>
                         <li className="pinterest"><a href="#"><img src="../images/pinterestIconWhite.svg" alt=""/></a></li>
                         <li className="youtube"><a href="#"><img src="../images/youtubeIconWhite.svg" alt=""/></a></li>
                     </ul>
                 </div>
             </section>
         </div>
     </div>
    );}
// return ( 
//     <div className="contact">
//         <div className="container">
//             <section className="info">
//                 <div>
//                     <h1 className="f-d3 f-md-d2">Login to more discounts</h1>
//                     <form action="" className="w-100">
//                         <label htmlFor="username" className="mb-2">Full Name</label>
//                         <input type="text" className="my-form w-100" placeholder="Enter your name"style={{textAlign: 'left',borderRadius:20}} id="username"/>
                        
//                         <label htmlFor="email" className="mb-2">Email Address</label>
//                         <input type="text" className="my-form w-100" placeholder="Your contact email"style = {{textAlign: 'left',borderRadius:20}} id="email"/>
//                         <h4 className="">Fill What is you interest with</h4>
                        
                        
//                         <label>
//                             <input type="range" min="0" max="100" value="50" step="1"/>
//                             <span style={{ marginLeft: '10px' }}>Sport</span>
//                         </label>
//                     </form>
//                 </div>
//                 <div>
//                     <h1 className="f-d3 f-md-d2">Contact Info</h1>
//                     <p className="text-muted mb-1">Syria , Aleppo</p>
//                     <p className="text-muted">+963 996 235 079</p>
//                     <h1 className="f-d5 f-md-d4 email">mahersefo2001@gmail.com</h1>
//                     <p className="f-d4 mt-4">Follow Us</p>
//                     <ul className="social">
//                         <li className="twitter"><a href="#"><img src="../images/twitterIconWhite.svg" alt=""/></a></li>
//                         <li className="facebook"><a href="#"><img src="../images/facebookIconWhite.svg" alt=""/></a></li>
//                         <li className="instagram"><a href="#"><img src="../images/instagramIconWhite.svg" alt=""/></a></li>
//                         <li className="pinterest"><a href="#"><img src="../images/pinterestIconWhite.svg" alt=""/></a></li>
//                         <li className="youtube"><a href="#"><img src="../images/youtubeIconWhite.svg" alt=""/></a></li>
//                     </ul>
//                 </div>
//             </section>
//         </div>
//     </div> );

export default Contact;