import BiodataCard from "./BiodataCard"

export default function UserInfo() {
    const bio = {
        nama:"imals",
        Image : "https://yt3.googleusercontent.com/8ArItaDFRZ9uBRyxutfE2SZtz-CKKjoqmjLypVJWbALGv-3oPbbRo28ry5kmB0Sv1k3UsAP5DA=s900-c-k-c0x00ffffff-no-rj",
        ttg : "29-09-2004",
        age : 19,
        hobie : "design web"
    }

    return (
        <>
            <BiodataCard bio={bio}/>
        </>
    )
}