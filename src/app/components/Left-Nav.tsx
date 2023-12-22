import Link from "next/link"
export default function LeftNavbar(){
    return (
        <div className=" pl-8 left-0  top-0 bg-slate-400 w-1/6 h-screen">
            <Link href="/components"><button>Components</button></Link>
        </div>
    )
}