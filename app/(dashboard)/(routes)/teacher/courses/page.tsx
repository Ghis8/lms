import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
    return ( 
        <div className="p-6">
            <Button >
                <Link href='/teacher/create'>
                    New Course
                </Link> 
            </Button>
        </div>
     );
}
 
export default CoursesPage;