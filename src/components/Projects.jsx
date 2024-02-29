/* eslint-disable react/prop-types */
import './../styles/Projects.css'
import Data from'./../assets/ProjectDetail.json'
import Image from './../assets/demo.jpg'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// eslint-disable-next-line react/prop-types
const IterateHighlightedData=({dataHighlighted})=>{
  return(
    <>
    <div className='iterator-container'>
      {
        // eslint-disable-next-line react/prop-types
        dataHighlighted.map(project=>(
          <HighLightedCard key={project.id} project={project}/>
        ))
      }
    </div>
    </>
  )
}

const HighLightedCard=({project})=>{
  const {id,name,domain,imageUrl,description,gitLink} = project;
  return(
    <>
      <div className='highlightedCard-container'>
        <div className='image-container'>
          <h6 style={{display:"none"}}>{imageUrl}{id}</h6>
          <img src={Image} alt="img" />
        </div>
        <h1 className='project-name'>{name}</h1>
        <div className='description-container' >
          <p>{description}</p>
          <h2>{domain}</h2>
          <a href={gitLink} ><OpenInNewIcon fontSize='middle'/></a>
        </div>

      </div>
    
    </>
  )
}


const IterateListData =({listData})=>{
  return(
   
    <>
      <div className='iterator-list-container'>
      {
        listData.map(project=>(
          <ListProject key={project.id} project={project} />
        ))
      }
      </div>
    </>
  )
}

const ListProject =({project})=>{
  const {id,name,domain,imageUrl,description}= project;
  return(
    <>
    <div style={{display:"none"}}>{domain}{imageUrl}</div>
    <li className='list-object-container'>
      <h5>{id}</h5>
      <h2>{name}</h2>
      <p>{description}</p>
      <img className="list-image"src={Image} alt="image" />
    </li>
    </>
  )
}

export default function Projects() {
  const data =Data;
  return (
    <>
      <div className='projects-main-container'>
          <div className='high-lighted-container'>
              <IterateHighlightedData dataHighlighted={data.HighLighted}/>
          </div>
           
        <div className='project-list-container'>
            <IterateListData listData={data.ListOfAll}/>
        </div>
      </div>


    </>
  )
}
