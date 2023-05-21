const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Maker", href: "/Maker", current: false },
  { name: "BookStore", href: "/BookStore", current: false },
  // { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export { navigation, classNames };
