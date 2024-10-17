
const Input = ({placeholder,label,name,type}) => {
  return (
    <div>
         <label className="label p-1 text-gray-300 text-[15px]">{label}</label>
         <input name={name} type={type} placeholder={placeholder} className="input text-[16px] input-bordered w-full " />
    </div>
  )
}

export default Input