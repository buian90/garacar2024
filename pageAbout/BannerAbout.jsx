import { Link } from "react-router-dom"

const BannerAbout = () => {
  return (
    <>
    {/* style="background-image: url(img/carousel-bg-1.jpg);" */}
      <div className="container-fluid page-header mb-5 p-0" >
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    </>
  )
}

export default BannerAbout