import { useState } from "react"


const GenderCheckbox = () => {
    const [gender,setGender] = useState("")

    return (
    <div className="flex my-2">
        <div className="form-control">
            <label className="label text-gray-200 cursor-pointer flex gap-2">
                <span className="">Male</span>
                <input value={gender}  name="gender" type="checkbox" defaultChecked className="checkbox  border-gray-200" />
            </label>
        </div>
        <div className="form-control">
            <label className="label text-gray-200 cursor-pointer flex gap-2">
                <span >Female</span>
                <input name="gender" type="checkbox" defaultChecked className="checkbox border-gray-200" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox