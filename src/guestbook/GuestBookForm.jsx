export default function GuestBookForm({ref,name,setName}){
    return(
        <>
        <label htmlFor="name"> Nama</label>
        <input type="text" ref={ref} name="name" value={name} onChange={(e)=> setName(e.target.value)}/> <br />
        </>
    )
}