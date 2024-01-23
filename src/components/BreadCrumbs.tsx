import { Link } from "react-router-dom";

interface BreadCrumbProps {
    items: { to: string; label: string }[];
  }

export function BreadCrumbs({items}:BreadCrumbProps) {
    return(
        <nav className="text-md p-1 mb-1 font-semibold hover:text-indigo-800" aria-label="breadcrumbs">
        <ol className="list-none p-0 inline-flex">
          {items.map((item:any, index:number) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {index < items.length - 1 ? (
                <Link className="cursor-pointer" to={item.to}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
}