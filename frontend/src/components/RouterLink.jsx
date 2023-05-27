import { Link, useLocation } from "react-router-dom";
import { navigation, classNames } from "../assets/utils";

export default function RouterLink() {
  const { pathname } = useLocation();

  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          className={classNames(
            item.href === pathname
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "rounded-md px-3 py-2 text-sm font-medium"
          )}
          aria-current={item.href === pathname ? "page" : undefined}
          to={item.href}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
