import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import {useSelector} from "react-redux"

export default function Header() {

  const cartQuantity = useSelector(state=>state.cart.cart.length)
 

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-40">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <h1 className="text-white text-2xl">Redux Website</h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6 text-white " aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/cart"
            className="text-sm font-semibold leading-6 text-white"
          >
            <Badge badgeContent={cartQuantity} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed  inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={()=>{setMobileMenuOpen(false)}}>
              <h1 className="text-white text-2xl">Redux Website</h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-9 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <Link
                  to="/cart"
                  onClick={()=>{setMobileMenuOpen(false)}}
                  className="text-sm font-semibold leading-6  text-white"
                >
                  <Badge badgeContent={4} color="primary" >
                    <ShoppingCartIcon />
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
