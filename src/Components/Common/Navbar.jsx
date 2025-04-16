import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links.js";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownFill } from "react-icons/ri";
import ProfileDropDown from "../Core/Auth/ProfileDropDown.jsx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { apiConnector } from "../../Services/apiConnector.js";
import { categories } from "../../Services/apis.js";
import "../../CSS/Components/Common/Navbar.CSS";

function Navbar({backgroundColor}) {
  const {token} = useSelector((state)=>state.auth);
  const {accountType} = useSelector((state)=>state.profile);
  const {totalItem} = useSelector((state)=>state.cart);

  let location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSubLinks = async() => {
    try{
      setLoading(true);
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      console.log(result.data.data);
      setSubLinks(result.data.data);
    }catch(err){
      console.log(err);
      console.log("Categories List could not be fetched.")
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchSubLinks();
  }, []);

  return (
    <div className="navHead" style={{backgroundColor: backgroundColor}}>
      <div className="nav">
        <Link to={"/"}><img className="navBarLogo" src={logo} alt="Logo" /></Link>
        <div className="links">
          <ul>
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div>
                    <div className="catalog">
                      <p>{link.title}</p>
                      <RiArrowDropDownLine/>
                      <div className="catalogDropDown">

                      {
                        loading ? (<p>Loading...</p>) : (
                          subLinks.map(
                            (sublink, i)=>(
                              <Link to={`/catalog/${sublink.name.split(" ").join("-").toLowerCase()}`} className="sublink"><p key={i}>{sublink.name}</p></Link>
                            ))
                        )
                      }
                    </div>
                    

                    </div>
                  </div>
                ) : (
                  <Link to={link?.path} style={{ textDecoration: "none" }}>
                    <p
                      style={{
                        color: `${
                          matchRoute(link?.path) ? "#FFD60A" : "#DBDDEA"
                        }`,
                        fontWeight: `${
                          matchRoute(link?.path) ? "600" : "400"
                        }`,
                      }}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* login/signup/dashboard */}
            <div className="navBarButton">
              {
                token !== null && <IoIosSearch size={24} color='#999DAA' style={{cursor: "pointer"}}/>
              }

              {/* {
                accountType  != "Instructor" && (
                  <Link to={"/dashboard/cart"}>
                    <IoCartOutline className='cart' size={24} color='#999DAA' />
                    {
                      totalItem > 0 && (
                        <span>{totalItem}</span>
                      )
                    }
                  </Link>
                )
              } */}

              {
                token === null  && (
                  <Link to={"/login"} style={{textDecoration: "none", color: "#AFB2BF"}}>
                    <div className="navButton">Login</div>
                  </Link>
                )
              }
              {
                token === null && (
                  <Link to={"/signup"} style={{textDecoration: "none", color: "#AFB2BF"}}>
                    <div className="navButton">SignUp</div>
                  </Link>
                )
              }

              {
                token !== null && (<ProfileDropDown/>)
              }
              {
                token !== null && (<RiArrowDropDownFill className="profiledropdown" size={24} />)
              }
            </div>

      </div>
    </div>
  );
}

export default Navbar;
