import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/products', name: 'Products', id: 'products' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' }
      ];
      
     
      
    return (
        <nav>
            <div>
            <AiOutlineMenu className="txt-2xl md:hidden"></AiOutlineMenu>
            </div>
           
           <ul className="md:flex">
           {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
           </ul>
        </nav>
    );
};

export default Navbar;