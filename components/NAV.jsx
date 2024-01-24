

const NAV = [
  {
    key: 1,
    name: 'Home',
    href: '#',
    submenus: [
      {
        key: 11,
        name: 'Submenu 1',
        href: '#',
        details: 'Some extra details about submenu 1',
        submenus: [
          {
            key: 111,
            name: 'Submenu 1.1',
            href: '#',
            details: 'Some extra details about submenu 1.1',
            submenus: []
          },
          {
            key: 112,
            name: 'Submenu 1.2',
            href: '#',
            details: 'Some extra details about submenu 1.2',
            submenus: []
          }
        ]
      },
      {
        key: 12,
        name: 'Submenu 2',
        href: '#',
        details: 'Some extra details about submenu 2',
        submenus: []
      }
    ]
  },
  {
    key: 2,
    name: 'About',
    href: '#',
    submenus: []
  },
  {
    key: 3,
    name: 'Contact',
    href: '#',
    submenus: []
  }
];

const MegaMenu = () => {
  return (
    <div>
      <nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
        <div className="container mx-auto flex justify-between">
          <div className="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Logo</div>
          <ul className="flex">
            {NAV.map((nav) => (
              <li key={nav.key} className="hoverable hover:bg-blue-800 hover:text-white">
                <a href={nav.href} className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-white">
                  {nav.name}
                </a>
                {nav.submenus.length > 0 && (
                  <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
                    <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                      {nav.submenus.map((submenu) => (
                        <ul key={submenu.key} className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                          <div className="flex items-center">
                            <h3 className="font-bold text-xl text-white text-bold mb-2">{submenu.name}</h3>
                          </div>
                          <p className="text-gray-100 text-sm">{submenu.details}</p>
                        </ul>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MegaMenu;
