import Link from "next/link";

export default function Footer() {
  return(
    <footer id="footer">
      <Link href="https://pt.wikipedia.org/wiki/Direito_autoral">Copyright <i className="bi bi-c-circle"></i> <a id="year" ></a>
          Matheus Piccoli</Link>
    </footer>
  )
}