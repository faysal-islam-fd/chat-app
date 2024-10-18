
const Input = ({placeholder,label,value,name,type,setInputs}) => {
  return (
    <div>
         <label className="label p-1 text-gray-300 text-[15px]">{label}</label>
         <input onChange={(e)=>setInputs(prev=> {

            const {value} = e.target;
              
          return {...prev, [e.target.name]: value}
         })} value={value} name={name} type={type} placeholder={placeholder} className="input text-[16px] input-bordered w-full " />
      
    </div>
  )
}

export default Input