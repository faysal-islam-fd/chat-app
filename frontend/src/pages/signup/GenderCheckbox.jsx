

const GenderCheckbox = ({onSelectGender,selectGender}) => {

    return (
    <div className="flex my-2">
        <div className="form-control">
            <label className="label text-gray-200 cursor-pointer flex gap-2">
                <span className="">Male</span>
                <input
                  checked={selectGender === "male"}
                  onChange={()=>onSelectGender("male")} type="checkbox"  className="checkbox  border-gray-200" />
            </label>
        </div>
        <div className="form-control">
            <label className="label text-gray-200 cursor-pointer flex gap-2">
                <span >Female</span>
                <input  
                checked={selectGender === "female"}
                onChange={()=>onSelectGender("female")}
                type="checkbox"  className="checkbox border-gray-200" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox