import { getAllIndustries } from "@/app/actions/jobs";
import Navbar from "./Navbar";

export default async function NavbarWrapper() {
    const industries = await getAllIndustries();
    return <Navbar industries={industries} />;
}
