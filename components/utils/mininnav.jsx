import Link from "next/link"


const mininnav = (props) => {
  return (
    <>
    <div className="flex flex-row items-center">
    <Link href='/' className="text-gray-700">
    Home
    </Link>
    <span>
        --&gt;
    </span>
    <div className="text-gray-500">
    {props.slug}
    </div>
    <span>
    </span>
    </div>
    </>
  )
}

export default mininnav