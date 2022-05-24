import "./Header.css";
import { auth, provider } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { userActions } from "../../store/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector((state) => state.user.name);
  const userPhoto = useSelector((state) => state.user.photo);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(userActions.setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      userActions.setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <nav className="nav">
      <a className="logo">
        <img src="/images/logo.svg" alt="Disney+" />
      </a>
      {!userName ? (
        <a className="login" onClick={handleAuth}>
          Login
        </a>
      ) : (
        <>
          <div className="navMenu">
            <a href="/home" className="navMenu-item">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a className="navMenu-item">
              <img src="/images/search-icon.svg" alt="HOME" />
              <span>SEARCH</span>
            </a>
            <a className="navMenu-item">
              <img src="/images/watchlist-icon.svg" alt="HOME" />
              <span>WATCHLIST</span>
            </a>
            <a className="navMenu-item">
              <img src="/images/original-icon.svg" alt="HOME" />
              <span>ORIGINALS</span>
            </a>
            <a className="navMenu-item">
              <img src="/images/movie-icon.svg" alt="HOME" />
              <span>MOVIES</span>
            </a>
            <a className="navMenu-item">
              <img src="/images/series-icon.svg" alt="HOME" />
              <span>SERIES</span>
            </a>
          </div>
          <div className="signOut">
            <img src={userPhoto} className="userImg" alt={userName} />
            <div className="dropDown">
              <span onClick={handleAuth}>Sign Out</span>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
export default Header;
