import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/profile.png" width={64} height={64}/>
            </div>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/pages/"><a>Ninja Listing</a></Link>
        </nav>
    );
}

export default Navbar;