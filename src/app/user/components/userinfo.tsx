import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

const UserInfo = () => {
    const router = useRouter()
    const [username, setUsername] = useState('Ciz')
    const [selected, setSelected] = useState('')


    return(
        <div className="w-[200px] p-[20px] flex flex-col justify-center gap-[20px] shadow-md rounded-md">
            <Button variant={"secondary"}>Ачаа нэмэх +</Button>
        </div>
    )
}

export default UserInfo