"use client"
import { asyncAddimages } from '@/store/actions/GalleryActions';
import React , { useEffect , useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
  const [pageChange, setpageChange] = useState(1)
  const {images} = useSelector((state) => state.GalleryReducer)
  console.log(images)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(asyncAddimages(pageChange));
}, [pageChange]);


    const nextPAge = ()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
    setpageChange(pageChange+1)
  }

    const prevPAge = ()=>{
    setpageChange(pageChange-1)
  }


  return (
    <div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        {images.length > 0 ?

        <div id='main'>
          <div className='pagechanges'>

              {pageChange === 1 ? 
                    <button type="button" className=" button-2" style={{border: '2px solid white' , color: 'white', opacity: '.4'}} onClick={()=>(alert("you are on the 1st page"))}> ⇤ Prev page </button>:
                    <button type="button" className=" button-2" style={{border: '2px solid white' , color: 'white'}} onClick={prevPAge}> ⇤ Prev page </button>
                  }
                    <button type="button" className="button-1" style={{color: 'rgb(114, 114, 114)'}} onClick={nextPAge}> Next Page ⇥ </button>
            
              </div>

            

        {images.length > 0 ? images.map((index)=>(
          
            <div className="card text-bg-dark" key={index.id}>
              <img src={index.download_url} className="card-img image" alt="..."/>
              <div className="card-img-overlay">
                <h5 className="card-title">Author : {index.author}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <span>⇤ Expand ⇥</span>
              </div>
            </div>
                  )):
                  "loading"
                }
              
              <div className='pagechanges'>

                  {pageChange === 1 ? 
                        <button type="button" className=" button-2" style={{border: '2px solid white' , color: 'white', opacity: '.4'}} onClick={()=>(alert("you are on the 1st page"))}> ⇤ Prev page </button>:
                        <button type="button" className=" button-2" style={{border: '2px solid white' , color: 'white'}} onClick={prevPAge}> ⇤ Prev page </button>
                      }
                        <button type="button" className="button-1" style={{color: 'rgb(114, 114, 114)'}} onClick={nextPAge}> Next Page ⇥ </button>

              </div>
        {/* {images.length > 0 ? JSON.stringify(images) : "Loading"} */}
        </div> :
        <div id='loader'>
          <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
        </div>
        }

    </div>
  )
}

export default page