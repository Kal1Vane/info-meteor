
import Link from "next/link";
import { AppRoute } from "../../const";

function Header() : JSX.Element {
  return (
    <header>
      <Link href={AppRoute.MAIN} >
          Main
      </Link>
      <Link href={AppRoute.BASKET} >
          Basket
      </Link>
      <Link href={AppRoute.METEOR} >
          info meteor
      </Link>
    </header>
  )
}

export default Header;