import { routes } from "../../routes";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div>
      <p>User Menu</p>
      {routes.map(
        ({ path, exact, showInMenu, label, isProtected, isNotLoggedOn }) => {
          return (
            <NavLink
              //activeClassName={classes.active}
              key={path}
              exact={exact}
              to={path}
            >
              {label}
            </NavLink>
          );
        }
      )}
    </div>
  );
};

export default UserMenu;
