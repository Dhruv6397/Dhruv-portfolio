import './../styles/Home.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Home() {
  return (
    <>
        <div className="background-container">
        </div>
       
        <div className='home-main-container'>
            <div className='greet'> 
                <h2>Hi, I&apos;m</h2>
                <div className='name'> 
                    <span className='char d'>D</span>
                    <span className='char h'>H</span>
                    <span className='char r'>R</span>
                    <span className='char u'>U</span>
                    <span className='char v'>V</span>
                </div>
            </div>
        </div>
        <div className='icons-class'>
          <a className='git-i' href='https://github.com/Dhruv6397' target='_blank'>
            <GitHubIcon fontSize='large'/>
            <span className='ic icon-git'>dhruv6397</span>
          </a>
          <a className='link-i' href='https://www.linkedin.com/in/dhruv6397/' target='_blank'>
            <LinkedInIcon fontSize='large'/>
            <span className='ic icon-linked'>dhruv6397</span>
          </a>
          <a className='x-i' href='https://twitter.com/dhruvverma____' target='_blank'>
            <XIcon fontSize='large'/>
            <span className='ic icon-x'>dhruvverma____</span>
          </a>
          <a className='ins-i' href='https://www.instagram.com/dhruv.verma___/' target='_blank'>
            <InstagramIcon fontSize="large"/>
            <span className='ic icon-insta'>dhruv.verma___</span>
          </a>
          
        </div>   
    </>
  )
}
