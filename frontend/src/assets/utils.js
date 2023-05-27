const navigation = [
  { name: "Home", href: "/" },
  { name: "Maker", href: "/Maker" },
  { name: "BookStore", href: "/BookStore" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export { navigation, classNames };
