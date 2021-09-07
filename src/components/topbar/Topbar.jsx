import './topbar.scss'
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className="topbar" >
           <div className="wrapper">
               <div className="left">
                   <a href="#intro" className="logo">Majd.</a>
                   <div className="itemContainer">
                        <PersonIcon className="icon" />
                        <span>+49 017 4914 0007</span>
                   </div>
                   <div className="itemContainer">
                        <MailIcon className="icon" />
                        <span>majd.alsaeed13m@gmail.com</span>
                   </div>
                 </div>
               
               <div className="right">
                   <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} >
                       <span className="line1"></span>
                       <span className="line2"></span>
                       <span className="line3"></span>
                   </div>
               </div>
           </div>
        </div>
    )
}
