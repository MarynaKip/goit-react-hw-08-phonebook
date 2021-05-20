import { useSelector, useDispatch } from "react-redux";
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";
// import { A } from "hookrouter";
import { createUseStyles } from "react-jss";
import Button from "@material-ui/core/Button";
import { logout } from "../../redux/user/operations";

const useStyles = createUseStyles({
  menu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  link: {
    color: "green",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    width: "150px",
    height: "25px",
  },
  active: {
    color: "rgb(59, 138, 255)",
  },
});

const checkShowPage = (isProtected, isLoggedOn, isNotLoggedOn) => {
  const showProtected = !isProtected || (isProtected && isLoggedOn);
  const showLoggedOn = !isNotLoggedOn || (isNotLoggedOn && !isLoggedOn);

  return showProtected && showLoggedOn;
};

const UserMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedOn = useSelector((state) => state.user.isLoggedOn);

  const handleLogOut = () => dispatch(logout());
  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <p>User Menu</p>
        {routes.map(({ path, exact, label, isProtected, isNotLoggedOn }) => {
          const showInMenu = checkShowPage(
            isProtected,
            isLoggedOn,
            isNotLoggedOn
          );

          return showInMenu ? (
            // <A href={path} key={path} className={classes.link}>
            //   {label}
            // </A>
            <NavLink
              activeClassName={classes.active}
              key={path}
              exact={exact}
              to={path}
            >
              {label}
            </NavLink>
          ) : null;
        })}
      </div>
      <Button
        onClick={handleLogOut}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
