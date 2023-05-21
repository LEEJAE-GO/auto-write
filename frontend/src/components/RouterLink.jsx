import { Link } from "react-router-dom";
import { navigation, classNames } from "../assets/utils";

export default function RouterLink() {
  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "rounded-md px-3 py-2 text-sm font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
          to={item.href}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
